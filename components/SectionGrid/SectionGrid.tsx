import Card from "../Card/Card"
import { GRID_INFO, INSTAGRAM_POSTS, MORE_RECIPES } from "@/data"
import { cn } from "@/lib/utils"

export const RecipeGrid = () => {
  return (
    <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 px-0 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
      {GRID_INFO.map(({ imageSrc, title, fill, tag, time, slug }) => (
        <Card
          key={title}
          href={slug && `/recipes/${slug}`}
          src={imageSrc}
          title={title}
          fill={fill}
          isAd={title === "Ad Banner"}
          background={false}
          tag={tag}
          time={time}
        />
      ))}
    </div>
  )
}

export const CheckOutGrid = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="mt-12 grid w-full grid-cols-2 justify-items-center gap-6 lg:grid-cols-4">
        {INSTAGRAM_POSTS.map((post, index) => (
          <img key={index} src={post.post} alt={`Instagram post ${index + 1}`} className="aspect-[300/446] w-full rounded-2xl border border-line object-cover" />
        ))}
      </div>
    </div>
  )
}

export const MoreRecipesGrid = ({ number, className }: { number: number; className?: string }) => {
  return (
    <div className={cn("mt-12 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {MORE_RECIPES.slice(0, number).map(({ imageSrc, title, fill, tag, time, slug }) => (
        <Card
          key={title}
          href={slug && `/recipes/${slug}`}
          src={imageSrc}
          title={title}
          fill={fill}
          background={true}
          tag={tag}
          time={time}
        />
      ))}
    </div>
  )
}
