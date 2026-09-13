import Image from "next/image";

export default function ServiceArea({ id }) {
  return (
    <section id={id} className="scroll-mt-[62px] sm:scroll-mt-[92px] md:scroll-mt-[112px] lg:scroll-mt-[122px] mbl-section-padding sm:sm-section-padding md:md-section-padding lg:lg-section-padding">
      <h2 className="flex justify-center font-bold underline text-primary text-[4vw]">
        Service Areas
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-start gap-6 px-6 py-4 ">
        <Image src={"/images/landing_page_images/map_of_michigan.jpeg"} alt="Map of Michigan service area" width={550} height={550} className="w-full max-w-[350px] sm:max-w-[450px] md:w-[45vw] md:max-w-[550px] mx-auto lg:mx-0 lg:shrink-0 border-2 border-primary self-center"/>
        <div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center md:flex-row
   gap-4 justify-center md:justify-around">
              <div className="bg-primary text-white rounded-md border-5 border-hover-dark-c">
                  <h3 className="py-3 px-[70] font-bold text-center">Macomb County</h3>
                  <ul className="border-t-3 border-hover-dark-c p-3">
                    <li>Clinton Township, MI</li>
                    <li>Eastpointe, MI</li>
                    <li>Fraser, MI</li>
                    <li>Macomb Township, MI</li>
                    <li>Mount Clemens, MI</li>
                    <li>Roseville, MI</li>
                    <li>Shelby Township, MI</li>
                    <li>St. Clair Shores, MI</li>
                    <li>Sterling Heights, MI</li>
                    <li>Warren, MI</li>
                  </ul>
                </div>
                <div className="bg-primary text-white rounded-md border-5 border-hover-dark-c">
                  <h3 className="py-3 px-[70] font-bold text-center">Oakland County</h3>
                  <ul className="border-t-3 border-hover-dark-c p-3">
                    <li>Birmingham, MI</li>
                    <li>Bloomfield Hills, MI</li>
                    <li>Farmington, MI</li>
                    <li>Farmington Hills, MI</li>
                    <li>Novi, MI</li>
                    <li>Pontiac, MI</li>
                    <li>Royal Oak, MI</li>
                    <li>Southfield, MI</li>
                    <li>Troy, MI</li>
                    <li>West Bloomfield Township, MI</li>
                  </ul>
                </div>
            </div>
            <div className="bg-primary text-white border-5 border-hover-dark-c rounded-md">
                <h3 className="font-bold py-3 px-[70] text-center">Wayne County</h3>
                <div className="flex">
                  <div>
                    <ul className="border-t-3 border-hover-dark-c p-3">
                      <li>Allen Park, MI</li>
                      <li>Brownstown Charter Township, MI</li>
                      <li>Canton, MI</li>
                      <li>Dearborn, MI</li>
                      <li>Dearborn Heights, MI</li>
                      <li>Detroit, MI</li>
                      <li>Downriver, MI</li>
                      <li>Grosse Ile Township, MI</li>
                      <li>Livonia, MI</li>
                      <li>Melvindale, MI</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="border-t-3 border-hover-dark-c p-3">
                      <li>Plymouth, MI</li>
                      <li>Redford Township, MI</li>
                      <li>River Rouge, MI</li>
                      <li>Riverview, MI</li>
                      <li>Southgate, MI</li>
                      <li>Taylor, MI</li>
                      <li>Trenton, MI</li>
                      <li>Wayne, MI</li>
                      <li>Westland, MI</li>
                      <li>Woodhaven, MI</li>
                      <li>Wyandotte, MI</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
          <p className="pt-2 text-center text-2xl text-primary-dark font-bold">And everywhere in-between!</p>
          <p className="text-primary pr-5 leading-tight">Our home health care services extend throughout Macomb County, Oakland County, and Wayne County, bringing compassionate, Medicare-certified care directly to your doorstep. Based in Farmington Hills, our team of dedicated caregivers travels to homes across both counties, ensuring quality care is accessible no matter where you or your loved one resides.</p> 
          <p className="text-primary pr-2 leading-tight pt-2">Whether you&apos;re in a bustling city or a quiet suburban neighborhood, our mission is to deliver skilled nursing, rehabilitation therapy, and support services with convenience and compassion, right where you need them most. </p>
        </div>
        
      </div>
    </section>
  )
}
