import Image from 'next/image'; // ✅ Correct import

export default function MyComponent() {
  return (
    <div>
      <Image
        src="/imdexpage.png" // ✅ Ensure the image is inside `public/`
        width={1106} 
        height={753} 
        alt="Hero Banner"
      />
    </div>
  );
}
