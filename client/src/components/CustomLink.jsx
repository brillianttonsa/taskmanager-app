function CustomLink({ children, className, ...props }) {
  return (
    <a
      {...props}
      className={className}
    >
      {children}
    </a>
  );
}

export default CustomLink;