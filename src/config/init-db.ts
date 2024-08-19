import connectDB from '../config/database';
import { UserModel } from '../models/user.models';
import { TaskModel } from '../models/task.models';
import { TeamModel } from '../models/team.models';
import mongoose from 'mongoose';

async function initializeDatabase() {
    try {
        await connectDB(); // Usa la conexión existente
        console.log('Connected to MongoDB');

        // Eliminar datos existentes
        console.log('Clearing existing data...');
        await UserModel.deleteMany({});
        await TaskModel.deleteMany({});
        await TeamModel.deleteMany({});

        console.log('Existing data cleared.');

        // Insertar datos de muestra
        console.log('Inserting sample data...');
        
        // Sample Users
        const user1 = new UserModel({ name: 'John Doe', email: 'john@example.com', password: '123456' });
        const user2 = new UserModel({ name: 'Jane Max', email: 'jane@example.com', password: '123456' });
        
        await user1.save();
        await user2.save();

        // Sample Team
        const team = new TeamModel({ name: 'Development Team', members: [user1._id, user2._id] });
        await team.save();

        // Sample Task
        const task = new TaskModel({ title: 'Setup Project', description: 'Initialize the project repo', status: 'Pendiente', team: team._id, assignedTo: [user1._id] });
        await task.save();

        console.log('Sample data inserted successfully!');
        
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

initializeDatabase();