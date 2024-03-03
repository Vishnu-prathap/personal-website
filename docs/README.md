<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->

### Welcome to SAKSHAM

## SAKSHAM:

SAKSHAM is meticulously crafted to modernize education systems. We continually engage in the process of learning and implementing innovative methods to enhance and distinguish our product. Our primary objective is to offer a user experience that is not only simple but also elegant in its design. We aspire for you to incorporate our application into your daily routine, ensuring a seamless and enriching experience. Your satisfaction is our priority. ❤️

rbaclogin-20240124-164636.png
# RBAC:

SAKSHAM employs **R**ole-**B**ased **A**ccess **C**ontrol, establishing a unified login platform for all users, including students, faculty, administrators, and principals. This strategic approach ensures a seamless login experience and consistent control across all user categories. Our sophisticated user management system empowers the Super Admin to meticulously allocate roles and permissions to individual users. Further details on this process will be elucidated in the subsequent steps.
# Invite System:

singleinvite-20240124-164826.png
# Admin Invite:

Within the administrative category, we encompass faculty, staff members, management staff, and all institute heads. Each administrative user is exclusively invited by the Super Admin. The Super Admin has the option to extend **individual invitations**, specifying the necessary details, or utilize the **bulk invite** feature for streamlined bulk invitations.

Upon dispatching the invitation, the user will promptly receive an email from the TTC bot. This email will guide them through the process of setting up their password and redirect them to the login page.

# Student Invite:

Administrators with role access to invite students can seamlessly extend invitations to students on the platform. Subsequently, students will be notified via email to create their login password for SAKSHAM. Once the password is created, students can use their **email** and the designated **password** as their login credentials for accessing SAKSHAM.

# Admin Access:

SAKSHAM provides an extensive array of features tailored to various administrative roles. **Key functionalities encompass**:

- Quick Links: Read and create

- Notification: Read and create

- Courses: Read and create

- User Management: Read and create

Each user can be meticulously configured to possess a unique set of permissions and access. This capability empowers the Super Admin to exercise precise control and monitor the usage of every feature from a centralized platform.

quicklinks-20240122-055204.png
# Quick Links:

True to its nomenclature, the Quick Links feature is designed to facilitate convenient access to various webpages associated with the institute. This section allows for the display of links to essential pages such as the *digital library, college website, fee payment portal, and scholarship portal.* Users can effortlessly access these resources with a single click, streamlining their navigation experience.

 Utilizing Quick Links:

Administrators have the capability to create Quick Links, customizing the access to essential webpages within the institute. During the creation process, administrators can select a suitable banner image for the Quick Link.

Each Quick Link mandates the following details:

- Title: Clearly defining the purpose or content of the Quick Link.

- URL to the Site: Providing the web address for seamless redirection.

- Batches and Departments Eligible: Specifying the batches and departments permitted to view the Quick Link.

This formalized process ensures an organized and structured approach to managing Quick Links within the SAKSHAM platform.

notificationFullpage-20240122-062013.png
# Notifications:

SAKSHAM is dedicated to enhancing communication not only between the institute and students but also among different levels of faculty and management. The Notification feature is strategically designed to facilitate efficient communication, enabling students to swiftly comprehend crucial subjects conveyed in each notification with a mere glance. This emphasis on streamlined communication contributes to an informed and connected academic environment within the institute.

createnotification-20240124-165215.png
# Creating Notifications:

The "Create Notification" feature in SAKSHAM mirrors the simplicity of delivering announcements on an intercom, adorned with a touch of sophistication. This powerful tool empowers users to effortlessly disseminate notifications to all students and admin users. The search and filter options facilitate the quick location of specific notifications, while administrative users are equipped with the capability to delete notifications as needed.

Here's a structured guide on using this feature:

- Provide a title for the notification.

- Input details in the text area, allowing users to embed links relevant to the notification.

- Upload a banner image to enhance the readability of the notification.

- Select the batches and departments intended to receive the notification. Individual or all batches and departments within the institute can be chosen.

- Attach important documents, files, and images to the notification for user access.

For the convenience of administrative users, the "Create Notification" feature includes a "SAVE AS DRAFT" functionality. This enables administrators to compose and store notifications until the designated time for dissemination. This thoughtful addition enhances flexibility and efficiency in the notification creation process.

userminvited-20240124-165326.png
# User Management:

True to its nomenclature, User Management stands as one of SAKSHAM's central features designed to proficiently handle a multitude of users. The Super Admin holds the authority to invite additional admin users to the SAKSHAM platform. Employing an invite-onboarding methodology, this approach serves to curtail irrelevant user onboarding and ensures the submission of pertinent details such as name, email, phone number, and department before integration.

Users can be invited through two distinct methods:

1. Individual Invites: This method entails the invitation of a single user. The admin is required to input the user's name, phone number, email address, department, and user type (student/faculty).

2. Bulk Invites: Simplifying the process of inviting multiple users, administrators can utilize the bulk invite feature. For bulk invitations, the admin must download an Excel sheet template and populate it with the details of users to be invited, including Name, Email, Department, and Phone Number.

Upon uploading the bulk invites, a verification process ensues, and invitations are dispatched via email. Any discrepancies in user details are duly noted in the "invite not-sent" section, preventing the invitee from extending invitations with incorrect credentials.

Post-invitation, the user details are displayed in the "invited users" tab, indicating that the user has received an invitation but must complete the onboarding process to access the SAKSHAM platform. Additionally, a feature for resending invites to users is provided for added convenience.

# User Profile:

Each user type, whether student or administrator, is allocated a designated profile. The student profile serves a dual purpose as the proctor diary for the student.

studentprofile-20240124-165529.png
# Student Profile:

Comprehensive information about the student is encapsulated within the profile, encompassing personal details, current semester specifics, contact information for parents/guardians, and the HSC and SSC details of the user. These details are diligently updated on each student's profile based on the data provided by the institute.

The section dedicated to current semester details furnishes information about the student's enrolled courses, marks, eligibility, and CGPA up to the present semester. This feature empowers students to monitor their academic progress and current standing effectively.

adminprofile-20240124-165459.png
# Admin Profile:

The administrative profile encompasses vital details pertaining to the admin user, including employee ID, official email, contact number, and designation within the institute. Additionally, a dedicated section is allocated for the compilation of faculty publications.

Admin faculty users are entrusted with the role of proctors within their respective departments, serving as conduits of information between parents and students. To facilitate seamless access to information for proctors, the Proctor List table offers administrators insights into details concerning their assigned student proctees. This includes fundamental information such as the current batch details of students, current academic year, department, and a modal containing a comprehensive list of all proctor-assigned students.

