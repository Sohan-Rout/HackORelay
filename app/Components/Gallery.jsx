import CircularGallery from '@/app/Components/ui/CircularGallery';
import React from 'react'

export default function Gallery(props) {
  return (
    <>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2rem',backgroundColor:'black' }}>Meet Our Team</h1>
    <div style={{ height: '600px', position: 'relative',backgroundColor: 'black',paddingBottom:'50px' }}>
      
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
</>
  )
}
