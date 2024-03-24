import Button from "./Button"

type CategoryPillsProps = {
    categories: string[],
    selectedCategory: string,
    onSelect: (category: string) => void
}

function CategoryPills({ categories, selectedCategory, onSelect }: CategoryPillsProps) {
    return (
        <>
            <div className="overflow-x-hidden relative">
                <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
                    {categories.map(category => (
                        <Button 
                            key={category} 
                            variant={selectedCategory === category ? 'dark' : 'default' } 
                            className="py-1 px-3 rounded-lg whitespace-nowrap"
                            onClick={() => onSelect(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CategoryPills