const MenuToggle = ({ onClick }) => {
  return (
    <button
      className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
      type="button"
      aria-label="button"
      onClick={onClick}
    >
      <img src="./header-menu.svg" alt="menu-responsive" />
    </button>
  )
}

export default MenuToggle

