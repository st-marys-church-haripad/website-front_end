const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer text-center text-bg-secondary">
      <p className="fs-14 mb-0">Copyright &copy; {date} St.Mary's Orthodox Church, Haripad, All Rights Reserved.</p>
    </div>
  )
}

export default Footer;
