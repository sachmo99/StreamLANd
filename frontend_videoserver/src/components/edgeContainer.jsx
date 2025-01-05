/**
 * Container component to wrap and center children content.
 *
 * This component provides a flexible container with default styling,
 * allowing additional custom classes to be passed via the `className` prop.
 * It centers its children both horizontally and vertically by default.
 *
 * @component
 * @example
 * return (
 *   <Container className="bg-blue-500">
 *     <p>Hello, World!</p>
 *   </Container>
 * )
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @param {string} [props.className] - Additional custom classes to apply to the container.
 * @returns {JSX.Element} A styled container that centers its children.
 */

export default function Container({ children, className='' }) {

    return(
        <div className={`w-full p-2 bg-[#7528cc] flex items-center justify-center ${className}`}>
        {children}
    </div>
    );
}