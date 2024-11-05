import SideMenuComponent from "@/components/SideMenuComponent"

const SideMenuLayout = ({children}) => {
  return (
    <div className="flex justify-between w-screen h-screen">
        <SideMenuComponent/>
        {children}
    </div>
  )
}

export default SideMenuLayout