interface TableItemProps {
    id: string
    tile: string
}

interface TabProps {
    tabs:TableItemProps
    activeId: string
    onChange: (id: string) => void ;
}

export function Tab({ activeId, tabs, onChange }: TabProps) {
    return ( 
       <div className="flex items-center gap-7 ">
        {tabs.map((tab) => (
            <button 
            key={tab.id}
            data-state={activeId == tab.id ? "active": "inactive"} 
            onClick={() => onChange(tab.id)}
            className="data-[state=active]:text-blue-dark data-[state=active]:border-b-2 data-[state=active]:border-blue-dark text-gray-primary"
            >
            {tab.title}
            </button>
        ))}
       </div>
    );
}