import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

export default interface IAppointmentRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
