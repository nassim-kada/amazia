import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, Filter } from 'lucide-react'

interface FilterBarProps {
  searchValue: string
  onSearchChange: (value: string) => void
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  sortOptions: Array<{ value: string; label: string }>
  sortValue: string
  onSortChange: (value: string) => void
  focusColor?: 'primary' | 'accent'
}

export function FilterBar({
  searchValue,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  sortOptions,
  sortValue,
  onSortChange,
  focusColor = 'primary',
}: FilterBarProps) {
  const focusClass = focusColor === 'accent' ? 'focus:ring-accent' : 'focus:ring-primary'
  const activeClass = focusColor === 'accent' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'

  return (
    <section className="bg-secondary border-b border-border py-8 px-4 sticky top-16 z-40">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`pl-10 ${focusClass}`}
          />
        </div>

        {/* Categories and Sort */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => onCategoryChange(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category ? activeClass : ''}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-muted-foreground" />
            <Select value={sortValue} onValueChange={onSortChange}>
              <SelectTrigger className={`w-40 ${focusClass}`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  )
}
