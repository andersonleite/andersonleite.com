import { Analytics } from '@vercel/analytics/react';

export default function LabPage() {
  return (
    <div>
      <Analytics />
      <div className='main-container-home'>
        <div className='main'>
          <div className="copy">
            <p>Hello!</p>

            {/* <span data-value="Anderson Leite">Anderson Leite</span> */}
            <p>My name is Anderson Leite, a Web Engineer with a degree in Software Engineering and an MBA in Digital Marketing.
            I currently work as a Technology Lead at <span className='square'AA></span> R/GA Tokyo.</p>
            <p className='copy-link'>
              <a className='link' href="https://www.linkedin.com/in/leiteanderson/" target="_blank">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

