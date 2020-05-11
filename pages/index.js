
export default function Home() {
  console.log(`Hey environment? ${process.env.NEXT_PUBLIC_YAY}`)
  return (
    <div>
      The environment var is: {process.env.NEXT_PUBLIC_YAY}
    </div>
  )
}
