export abstract class BaseNotification<T> {
    abstract notification(item: T) : React.ReactNode;
}