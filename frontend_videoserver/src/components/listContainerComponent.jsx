export default function ListContainerComponent({ children, id = '' }) {
    return (
    <div id={`${id}`} className="flex flex-col items-start p-3">
        {children}
    </div>
    );
}