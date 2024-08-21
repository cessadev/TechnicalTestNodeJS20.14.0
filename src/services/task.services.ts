import mongoose, { ObjectId } from "mongoose";
import { TaskModel } from "../models/task.models";
import { TeamModel } from "../models/team.models";
import { ITaskRequest } from "../models/task.models";

export const createTaskForTeam = async (teamId: string, taskData: ITaskRequest) => {
  const { title, description, assignedTo } = taskData;

  const teamIdObjectId = new mongoose.Types.ObjectId(teamId);

  // Verificar si el equipo existe
  const team = await TeamModel.findById(teamIdObjectId);
  if (!team) {
    throw new Error("Team not found");
  }

  // Validar que todos los usuarios asignados pertenecen al equipo y no estén ocupados
  for (const userId of assignedTo) {
    // Verificar si el usuario pertenece al equipo
    if (!team.members.includes(userId)) {
      throw new Error(`User with ID ${userId} does not belong to the team`);
    }

    // Verificar si el usuario ya está ocupado con otra tarea (es decir, tiene una tarea en progreso o pendiente)
    const userTasks = await TaskModel.find({
      assignedTo: userId,
      status: { $in: ["Pending", "In Progress"] },
    });

    if (userTasks.length > 0) {
      throw new Error(
        `User with ID ${userId} is already assigned to another task`
      );
    }
  }

  // Crear la tarea
  const task = new TaskModel({
    title,
    description,
    status: "Pending",
    team: teamIdObjectId,
    assignedTo,
  });

  // Guardar la tarea
  const savedTask = await task.save();

  // INFO: Guardar las actualizaciones del equipo (registrar la tarea en el equipo)
  team.tasks.push(savedTask._id);
  await team.save();

  return savedTask;
};
