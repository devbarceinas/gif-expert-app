const Loading = ({children, isLoading}) => {
  return (
    <div>
      {isLoading && <h4>{children}</h4>}
    </div>
  )
}

export { Loading }