# **App Name**: StudyPath AI

## Core Features:

- User Profile Setup: Secure user authentication and profile creation using Firebase Authentication and Firestore, capturing user's name, education level, field of study, and academic interests.
- AI-Powered Recommendations: Leverage Vertex AI to analyze user profiles and provide tailored recommendations for ideal countries and universities based on academic credentials and interests. The AI model acts as a tool for recommendations.
- AI Study Abroad Assistant: Ongoing conversational support via Vertex AI, assisting users with university applications, documentation, SOP, scholarship opportunities, and visa preparation. The AI model acts as a tool that incorporates application details, deadlines, and guidelines into its replies.
- Google Workspace Integration: Seamless integration with Google Calendar for deadline reminders, Gmail for notifications, and Google Drive for document management.
- Intuitive Dashboard: Display personalized recommendations and support information within a user-friendly interface, showing options in a clear, organized way.

## Style Guidelines:

- Primary color: Calming blue (#3498db) for trustworthiness and guidance.
- Secondary color: Light gray (#ecf0f1) for clean backgrounds and content separation.
- Accent: Teal (#008080) for interactive elements and highlights.
- Clean and readable typography to ensure clarity and focus.
- Use clear and informative icons to represent different study areas, countries, and application steps.
- Well-structured layout with clear sections for user profile, recommendations, and conversational support.
- Subtle transitions and animations to enhance user experience and guide users through the application process.

## Original User Request:
Build an AI-powered Higher Studies Assistant fully integrated within Google Workspace, leveraging Firebase's real-time database, authentication, cloud functions, and Google Cloud's Vertex AI capabilities.
Workflow:
Upon launching the app (Firebase-hosted web or mobile application), initiate an automatic AI chat interface (powered by Vertex AI).


First-time users are prompted through Firebase Authentication and Cloud Firestore to securely capture essential personal details:


Full Name


Current Education Level


Field of Study / Major


Targeted Academic Interests


Utilizing the user's profile data, Vertex AI models dynamically analyze and provide tailored recommendations, including:


Ideal countries for higher studies


Best-suited universities based on academic credentials and interests


After recommendations are provided, maintain an ongoing conversational support feature using Vertex AI to assist users throughout the entire study abroad process, including:


University Application Guidance


Documentation and Statement of Purpose (SOP) Support


Scholarship and Funding Opportunities


Visa Application and Interview Preparation


Integrate seamlessly with Google Workspace tools:
Google Calendar for deadlines and reminders


Gmail for email notifications and updates


Google Drive for storing and managing documents


Ensure the solution is deployable directly from Firebase Studio, with Firebase Extensions and Cloud Functions facilitating smooth data flow and interactions between Firebase backend services and Vertex AI.
  