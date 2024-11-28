// app/page.tsx

export default function Home() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#111', color: '#fff' }}>
      <h1>My Custom Portfolio</h1>
      <p>Welcome to my portfolio website!</p>
      <div>
        <img src="/images/my-image.jpg" alt="My portfolio" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
}
