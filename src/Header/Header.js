function Header(props) {
  return (
    <>
      <nav>
        <li>
          <a href="/">Main</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
      </nav>
    </>
  );
}

// function Nav(props) {
//   let data = props.nav;
//   const listItem = data.map((item) => (
//     <li key={item.link}>
//       <a href={item.link}>{item.text}</a>
//     </li>
//   ));
//   return (
//     <nav>
//       <ul>{listItem}</ul>
//     </nav>
//   );
// }

export default Header;
