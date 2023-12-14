export interface INotification {
  title: string;
  message: string;
  status: 'pending' | 'success' | 'error';
}
