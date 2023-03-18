import Image from "next/image"

export const Figure = ({ src, caption }: { src: string, caption: string }) => {
  return (
    <div>
      <figure>
        <Image alt="" src={src} width={400} height={300} />
      </figure>
      <figcaption className="h-padding-page">{caption}</figcaption>
    </div>
  )
}
