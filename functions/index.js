const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.generateAnalysis = functions.https.onCall((data, context) => {
  // Simple test function
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
  }

  // Return minimal test data
  return {
    meta: {
      assessment_date: new Date().toISOString(),
      ai_powered: false,
      test: true
    },
    message: 'Function is working'
  };
});

// Add a simple HTTP function for testing
exports.test = functions.https.onRequest((req, res) => {
  res.json({message: "Function deployed successfully"});
});