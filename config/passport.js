const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user.model');  // Ensure this is the correct path for your User model

// Configure the Google Strategy for passport
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL, // Use the callback URL from your .env
    scope: ['profile', 'email']  // Scopes for Google OAuth
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user already exists in the database using the Google ID
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
            // If the user exists, pass the user to the next step
            return done(null, user);
        }

        // If the user doesn't exist, create a new user
        user = new User({
            googleId: profile.id,
            name: profile.displayName || `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0].value,  // First email from profile
            picture: profile.photos[0].value  // Profile photo URL
        });

        // Save the new user to the database
        await user.save();
        return done(null, user);  // Send the new user to the next step
    } catch (error) {
        // Handle errors in user creation
        return done(error, null);
    }
}));

// Serialization of user for session
passport.serializeUser((user, done) => {
    done(null, user.id);  // Store only user ID in the session
});

// Deserialization of user to retrieve user data from DB
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);  // Find user in DB using the stored user ID
        done(null, user);  // Pass user object to the next middleware
    } catch (error) {
        done(error, null);  // Handle errors during user retrieval
    }
});
