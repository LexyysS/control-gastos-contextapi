
type ErrorMessageProps = {
    children: React.ReactNode
}
const ErrorMessage = ({children} : ErrorMessageProps) => {
  return (
    <p className="text-center font-bold text-xl bg-red-600 text-white p-1" >{children}</p>
  )
}

export default ErrorMessage
