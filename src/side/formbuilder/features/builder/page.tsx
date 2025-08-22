import SideMenu from "./component/sideMenu";
import Header from "./component/header";
import BuildView from "./component/buildView";
import BuildFormSlider from "./component/buildFormSlider";

export default function FormBuilderPage() {
  return (
    <div className="flex ">
      <SideMenu />
      <div className="flex flex-col items-center flex-1 p-1">
        <Header />
        <BuildView />
        <BuildFormSlider />
      </div>
    </div>
  );
}
