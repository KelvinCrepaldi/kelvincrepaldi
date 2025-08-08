export default function SidebarProject({ project }: { project: {id: string, name: string} }) {
    return <div className="w-[300px] border-r border-primary h-full">{project.name}</div>
}