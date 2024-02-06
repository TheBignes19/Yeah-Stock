import { Columns, List } from "@phosphor-icons/react";

export enum TypeView {
    COLUMN = 'column',
    ROW = 'row',
}

interface TabViewProps {
    view : TypeView;
    onChange: (view: TypeView) => void
}

export function TabView({view, onChange }: TabViewProps) {
    return (
        <div className="h-8 w-fit p-1 bg-[#242424] border-black-light rounded-md flex items-center gap-2">
            <button 
            data-state={view} 
            onClick={() => onChange(TypeView.COLUMN)}
            className="text-gray-primary data-[state=column]:text-white data-[state=column]:bg-black-light data-[state=column]:p-1 data-[state=column]:rounded">
                <Columns size={16} />
            </button>
            <button 
            data-state={view} 
            onClick={() => onChange(TypeView.ROW)}
            className="text-gray-primary data-[state=row]:text-white data-[state=row]:bg-black-light data-[state=row]:p-1 data-[state=row]:rounded">
                <List size={16} />
            </button>
        </div>
    )
}