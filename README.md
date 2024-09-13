## Technical Test for Junior Back-end Developer with Node.js and TypeScript

### Context:

The company requires a task management system (similar to a "to-do list") but focused on teams. The system will allow users to register, create teams, assign tasks to team members, and manage the status of these tasks.

### Requirements:

#### 🔧 Technologies and Tools:
- **Node.js** with TypeScript.
- **Express.js** for the server framework.
- **MongoDB** as the database (Mongoose for ODM can be used).
- **JWT** for authentication.
- **Jest** for unit testing.
- **Docker** (optional but recommended).

#### 📄 Deliverables:
- Source code in a Git repository (can be on GitHub, GitLab, etc.).
- Minimal documentation on how to run the application and the tests.
- Unit tests for at least one service or controller.

### Features to Implement:

    1. User Registration and Authentication:
        - Users should be able to register with an email and password.
        - Implement JWT authentication.
        - Protect routes that require authentication.

    2. Team Management:
        - Authenticated users can create teams.
        - Users can invite other users to join their team.
        - Users can view all the teams they belong to.

    3. Task Management:
        - Users can create tasks within a team.
        - Tasks can be assigned to a member of the corresponding team.
        - Tasks have a status (Pending, In Progress, Completed).
        - Users can update the status of tasks.

    Tests:
        Write unit tests for critical functionalities such as authentication and task management.

    Extras (Optional):
        Set up Docker to run the application and MongoDB in containers.
        Implement advanced error handling and validations.
        Add roles and permissions (e.g., only the team creator can invite new members).

### Evaluation Criteria:

1. Code Quality: Best development practices, proper use of TypeScript, and code organization.
2. Functionality: The API meets the specified requirements.
3. Documentation: Clear instructions to run the application and tests.
4. Testing: Quality and coverage of unit tests.
5. Error Handling: Robust error handling and validations.
6. Git Usage: Clear and organized use of commits in the repository.
