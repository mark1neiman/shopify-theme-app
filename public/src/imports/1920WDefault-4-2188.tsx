import svgPaths from "./svg-4s842x511q";
import img046Fa08A501B4D6D8A357A09967610692Jpg from "figma:asset/37036aeabc9b1fb32bddc296a668bc0acaf1e264.png";
import imgNanailsEu from "figma:asset/130f8557bbf2bade2e7c9765c5990b889e61aacc.png";
import { imgContainer, imgBackground, imgPickupAvailabilityPreview, imgProductPromotionAlert, imgBackground1, imgOverlay, imgContainer1, imgContainer2, imgContainer3, imgBackground2, imgBackground3 } from "./svg-p6rm5";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="Background">
      <Container1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M15.625 4.27913L4.375 15.712" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.625 15.712L4.375 4.27913" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div className="relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Background />
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
          <p className="leading-[30px]">Special offers for you</p>
        </div>
        <Container2 />
      </div>
    </div>
  );
}

function ButtonDialog() {
  return (
    <div className="bg-[#c4301c] h-[40px] relative rounded-tl-[6px] rounded-tr-[6px]" data-name="Button dialog">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip pb-[5.2px] pt-[4.6px] px-[12.8px] relative rounded-[inherit]">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <Container />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4301c] border-solid inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Home</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start px-[12px] relative shrink-0 w-[25px]" data-name="Margin">
      <div className="bg-[rgba(0,0,0,0.1)] h-[14px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Gel polish color</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start px-[12px] relative shrink-0 w-[25px]" data-name="Margin">
      <div className="bg-[rgba(0,0,0,0.1)] h-[14px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">Gel Polish Holy Molly Pantone 10 11ml</p>
      </div>
    </div>
  );
}

function NavigationBreadcrumbs() {
  return (
    <div className="content-stretch flex items-center px-[50px] relative shrink-0 w-[1415px]" data-name="Navigation - breadcrumbs">
      <Link />
      <Margin />
      <Link1 />
      <Margin1 />
      <Container4 />
    </div>
  );
}

function Component046Fa08A501B4D6D8A357A09967610692Jpg() {
  return (
    <div className="h-[728.09px] max-w-[754.260009765625px] relative shrink-0 w-[754.26px]" data-name="046fa08a-501b-4d6d-8a35-7a0996761069-2.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img046Fa08A501B4D6D8A357A09967610692Jpg} />
      </div>
    </div>
  );
}

function MotionElement() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="motion-element">
      <Component046Fa08A501B4D6D8A357A09967610692Jpg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p18214f80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p33b6d600} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <Svg1 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white max-w-[1920px] opacity-0 right-[20px] rounded-[19px] size-[38px] top-[20px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[19px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[728.33px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_728.33px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <MotionElement />
      <BackgroundBorder />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="h-[728.33px] relative shrink-0 w-full" data-name="Mask Group">
      <Container10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <MaskGroup />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_728.33px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <Container9 />
    </div>
  );
}

function RegionGalleryViewer() {
  return (
    <div className="h-[728.33px] relative shrink-0 w-full" data-name="Region - Gallery Viewer">
      <Container8 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[32px]">Specifications</p>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M3.125 10H16.875" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 3.125V16.875" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DetailsSlotSummary() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16.8px] pt-[16px] relative shrink-0 w-full" data-name="Details → Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <Svg2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[32px]">Product Details</p>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M3.125 10H16.875" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 3.125V16.875" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DetailsSlotSummary1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16.8px] pt-[16px] relative shrink-0 w-full" data-name="Details → Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading2 />
      <Svg3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[32px]">Ingredients</p>
        </div>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M3.125 10H16.875" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 3.125V16.875" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DetailsSlotSummary2() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16.8px] pt-[16px] relative shrink-0 w-full" data-name="Details → Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading3 />
      <Svg4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">{`Payment & Security`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4a4a4a] text-[15px] w-full whitespace-pre-wrap">
        <p className="mb-0">Your payment information is processed securely. We do not store credit card details nor have</p>
        <p>access to your credit card information.</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[16px] items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_140px] p-[24px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
      <Container13 />
      <Container14 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="h-[155.99px] relative shrink-0 w-full" data-name="Mask Group">
      <Background1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <DetailsSlotSummary />
      <DetailsSlotSummary1 />
      <DetailsSlotSummary2 />
      <MaskGroup1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0 sticky top-0 w-full" data-name="Container">
      <RegionGalleryViewer />
      <Container12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[827.7750244140625px] relative self-stretch shrink-0 w-[754.26px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[48px] relative shrink-0 text-[40px] text-black w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Gel Polish Holy Molly</p>
        <p>Pantone 10 11ml</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start py-[0.2px] relative shrink-0" data-name="Link">
      <div className="capitalize flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[20px]">Holy Molly</p>
      </div>
      <div className="absolute bg-black bottom-0 h-px left-0 right-0" data-name="Horizontal Divider" />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex items-center pb-[0.8px] relative self-stretch shrink-0" data-name="Status">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">{`Vendor: `}</p>
      </div>
      <Link2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-wrap items-start relative shrink-0 w-full" data-name="Container">
      <Status />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[28px] text-black w-full">
        <p className="leading-[38px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.6px] relative shrink-0 w-full" data-name="Status">
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.6px] pb-[0.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[13.5px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Tax included.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Status1 />
      <Container22 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p146b1700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Modern</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Item">
      <Svg5 />
      <Container23 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p146b1700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Eco-certified</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Item">
      <Svg6 />
      <Container24 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p146b1700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Warranty</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Item">
      <Svg7 />
      <Container25 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_16px] items-start pt-[4px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d8756] text-[0px] w-full">
        <p className="text-[15px] whitespace-pre-wrap">
          <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px]">{`Hurry up, only `}</span>
          <span className="font-['Montserrat:Black',sans-serif] font-black leading-[24px]">2</span>
          <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px]">{` items left in stock.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] h-[7px] overflow-clip relative rounded-[30px] shrink-0 w-full" data-name="progress-bar">
      <div className="absolute bg-[#0d8756] inset-[0_80%_0_0] rounded-[30px]" data-name="Background" />
    </div>
  );
}

function Status2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start pt-[16px] relative shrink-0 w-full" data-name="Status">
      <Container26 />
      <ProgressBar />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[100px] self-stretch shadow-[0px_0px_0px_1px_#e5e5e5]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[45px] py-[14.8px] relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
        <g id="SVG">
          <path d="M2.1875 10H11.8125" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 opacity-50 rounded-[100px] top-0 w-[45px]" data-name="Button">
      <Svg8 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
        <g id="SVG">
          <path d="M2.1875 10H11.8125" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d="M7 5.1875V14.8125" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center right-0 rounded-[100px] top-0 w-[45px]" data-name="Button">
      <Svg9 />
    </div>
  );
}

function QuantityInput() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-[48px] relative rounded-[100px] shrink-0 w-[125px]" data-name="quantity-input">
      <Input />
      <Button />
      <Button1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <QuantityInput />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Add to cart</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ededed] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[100px]" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[32.8px] py-px relative size-full">
          <Container32 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.p7dfa200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Save product</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[inherit]">
        <Frame />
        <Container34 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ededed] h-[48px] max-w-[510.7300109863281px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container33 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Form() {
  return (
    <div className="content-end flex flex-wrap gap-[0px_8px] items-end pt-[16px] relative shrink-0 w-full" data-name="Form">
      <Container28 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M1.25 8.75H18.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3a83e180} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Free International Shipping over $120</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Svg10 />
      <Container35 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2d9fcdc0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d44b600} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Free Returns Within 30 days</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Svg11 />
      <Container36 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d="M6 17.4488V27H26V17.4488" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          <path d={svgPaths.p247e4c00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          <path d={svgPaths.p3f2c9460} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          <path d={svgPaths.pf8b5000} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          <path d={svgPaths.p34a7a600} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
        <Svg12 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Pickup available at Pärnu mnt 23, Tallinn, Estonia,</p>
        <p>10141</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[12px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Usually ready in 24 hours</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p2c0e80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDialogViewStoreInformation() {
  return (
    <div className="-translate-y-1/2 absolute max-w-[1920px] right-0 rounded-[16px] size-[32px] top-1/2" data-name="Button dialog - View store information">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pr-[40px] relative w-full">
        <Container39 />
        <Container40 />
        <ButtonDialogViewStoreInformation />
      </div>
    </div>
  );
}

function PickupAvailabilityPreview() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_103.6px] px-[16.8px] py-[15.8px] right-0 rounded-[10px] top-0" data-name="pickup-availability-preview" style={{ maskImage: `url('${imgPickupAvailabilityPreview}')` }}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container37 />
      <Container38 />
    </div>
  );
}

function PickupAvailability() {
  return (
    <div className="h-[119.6px] relative shrink-0 w-full" data-name="pickup-availability">
      <PickupAvailabilityPreview />
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p1693bc80} id="Vector" stroke="var(--stroke-0, #049B6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#049b6e] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Limited time offer</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#049b6e] text-[0px] whitespace-nowrap">
        <p className="decoration-solid leading-[20px] text-[12px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#049b6e] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">{`Get $20 off when you spend $1,000 or more! `}</p>
      </div>
      <Link3 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12.5 3.42331L3.5 12.5696" id="Vector" stroke="var(--stroke-0, #049B6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.5 12.5696L3.5 3.42331" id="Vector_2" stroke="var(--stroke-0, #049B6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonClose() {
  return (
    <div className="absolute content-stretch flex items-center justify-center right-[5px] rounded-[19px] size-[38px] top-[5px]" data-name="Button - Close">
      <Svg15 />
    </div>
  );
}

function ProductPromotionAlert() {
  return (
    <div className="absolute bg-[rgba(4,155,110,0.1)] content-stretch flex gap-[12px] items-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_80px] pl-[16px] pr-[48px] py-[16px] right-0 rounded-[10px] top-0" data-name="product-promotion-alert" style={{ maskImage: `url('${imgProductPromotionAlert}')` }}>
      <Container41 />
      <Container42 />
      <ButtonClose />
    </div>
  );
}

function ProductPromotionAlertMaskGroup() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="product-promotion-alert:mask-group">
      <ProductPromotionAlert />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Share:</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pfc7f100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-[48px]" data-name="Border">
      <div className="content-stretch flex items-center justify-center overflow-clip px-px py-[12px] relative rounded-[inherit] w-full">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-black bottom-[65.07px] content-stretch flex flex-col items-start left-[-92.94%] opacity-0 pb-[2.57px] pt-[1.89px] px-[13.6px] right-[-94.98%] rounded-[6px]" data-name="Background">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11.5px] text-white whitespace-nowrap">
        <p className="leading-[18.36px]">Share on Facebook</p>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[-5.34px] h-[6.94px] left-[calc(50%-0.01px)] w-[13.87px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-black border-l-[9.6px] border-r-[9.6px] border-solid border-t-[9.6px] inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Border />
      <Background2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pfcbacf2} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-[48px]" data-name="Border">
      <div className="content-stretch flex items-center justify-center overflow-clip px-px py-[12px] relative rounded-[inherit] w-full">
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-black bottom-[65.07px] content-stretch flex flex-col items-start left-[-42.33%] opacity-0 pb-[2.57px] pt-[1.89px] px-[13.6px] right-[-43.5%] rounded-[6px]" data-name="Background">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11.5px] text-white whitespace-nowrap">
        <p className="leading-[18.36px]">Share on X</p>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[-5.34px] h-[6.94px] left-1/2 w-[13.87px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-black border-l-[9.6px] border-r-[9.6px] border-solid border-t-[9.6px] inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Border1 />
      <Background3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p24e0f100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-[48px]" data-name="Border">
      <div className="content-stretch flex items-center justify-center overflow-clip px-px py-[12px] relative rounded-[inherit] w-full">
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-black bottom-[65.07px] content-stretch flex flex-col items-start left-[-74.29%] opacity-0 pb-[2.57px] pt-[1.89px] px-[13.6px] right-[-76.12%] rounded-[6px]" data-name="Background">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11.5px] text-white whitespace-nowrap">
        <p className="leading-[18.36px]">Pin on Pinterest</p>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[-5.34px] h-[6.94px] left-1/2 w-[13.87px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-black border-l-[9.6px] border-r-[9.6px] border-solid border-t-[9.6px] inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Border2 />
      <Background4 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_12px] items-center relative shrink-0" data-name="Container">
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[16.01px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container18 />
      <Container19 />
      <List />
      <Status2 />
      <Form />
      <List1 />
      <PickupAvailability />
      <ProductPromotionAlertMaskGroup />
      <Container45 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[587.2249755859375px] pl-[20px] relative self-stretch shrink-0 w-[530.73px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-wrap gap-[0px_30px] items-start px-[50px] relative w-full">
        <Container6 />
        <Container15 />
      </div>
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="product-info">
      <div className="content-stretch flex flex-col items-start pb-[60px] px-[252.5px] relative w-full">
        <Container5 />
      </div>
    </div>
  );
}

function Heading2MotionElement() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[42px] whitespace-pre-wrap">Clients Love Us</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading2MotionElement />
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2fcd6d80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPreviousSlide() {
  return (
    <div className="bg-[#e8ded4] opacity-50 relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Previous slide">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M7.5 3.75L13.75 10L7.5 16.25" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNextSlide() {
  return (
    <div className="bg-[#e8ded4] relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Next slide">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function MotionElement1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="motion-element">
      <ButtonPreviousSlide />
      <ButtonNextSlide />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <MotionElement1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Melissa H.</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[13.5px] whitespace-nowrap">
        <p className="leading-[22px]">Verified Buyer</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <Heading4 />
      <Container56 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">“Hands down one of the best shirts</p>
        <p className="mb-0">I’ve ever owned. Fits great, feels</p>
        <p>amazing, seems to stay cool.”</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container54 />
      <Container57 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152.01 152.01">
        <g id="Frame">
          <path d={svgPaths.p4f9980} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p5437400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.paa57600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElement2() {
  return (
    <div className="h-[152.01px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg18 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_152.01px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }}>
      <MotionElement2 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="relative shrink-0 size-[152.01px]" data-name="Mask Group">
      <Overlay />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <MaskGroup3 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <Container52 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background5 />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 1 / 6">
      <MaskGroup2 />
    </div>
  );
}

function Group16Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 1 / 6:margin">
      <Group />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Cindy L.</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[13.5px] whitespace-nowrap">
        <p className="leading-[22px]">Verified Buyer</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_7.99px] items-center relative shrink-0" data-name="Container">
      <Heading5 />
      <Container62 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">“The denim is strong and of high</p>
        <p>quality, with just a bit of stretch.”</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container60 />
      <Container63 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152.01 152.01">
        <g id="Frame">
          <path d={svgPaths.p4f9980} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p5437400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.paa57600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElement3() {
  return (
    <div className="h-[152.01px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg19 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_152.01px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }}>
      <MotionElement3 />
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="relative shrink-0 size-[152.01px]" data-name="Mask Group">
      <Overlay1 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <MaskGroup5 />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <Container58 />
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 2 / 6">
      <MaskGroup4 />
    </div>
  );
}

function Group26Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 2 / 6:margin">
      <Group2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Wilson J.</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[13.5px] whitespace-nowrap">
        <p className="leading-[22px]">Verified Buyer</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <Heading6 />
      <Container68 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">“Hands down one of the best shirts</p>
        <p className="mb-0">I’ve ever owned. Fits great, feels</p>
        <p>amazing, seems to stay cool.”</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container66 />
      <Container69 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152.01 152.01">
        <g id="Frame">
          <path d={svgPaths.p4f9980} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p5437400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.paa57600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElement4() {
  return (
    <div className="h-[152.01px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg20 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_152.01px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }}>
      <MotionElement4 />
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="relative shrink-0 size-[152.01px]" data-name="Mask Group">
      <Overlay2 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <MaskGroup7 />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <Container64 />
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background7 />
    </div>
  );
}

function Group4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 3 / 6">
      <MaskGroup6 />
    </div>
  );
}

function Group36Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 3 / 6:margin">
      <Group4 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Samantha T.</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[13.5px] whitespace-nowrap">
        <p className="leading-[22px]">Verified Buyer</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8.01px] items-center relative shrink-0" data-name="Container">
      <Heading7 />
      <Container74 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">{`"This shirt is among the top in my`}</p>
        <p>{`collection. It fits excellently."`}</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container72 />
      <Container75 />
    </div>
  );
}

function Overlay3() {
  return <div className="bg-[rgba(0,0,0,0.03)] rounded-[10px] shrink-0 size-[152.01px]" data-name="Overlay" />;
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[12.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Overlay3 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <Container70 />
    </div>
  );
}

function MaskGroup8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background8 />
    </div>
  );
}

function Group6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 4 / 6">
      <MaskGroup8 />
    </div>
  );
}

function Group46Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 4 / 6:margin">
      <Group6 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <div className="h-[28px] shrink-0 w-[99.04px]" data-name="Heading 3" />
      <div className="h-[22px] shrink-0 w-[94.58px]" data-name="Rectangle" />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container79 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function Overlay4() {
  return <div className="bg-[rgba(0,0,0,0.03)] rounded-[10px] shrink-0 size-[152.01px]" data-name="Overlay" />;
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Overlay4 />
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <Container76 />
    </div>
  );
}

function MaskGroup9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background9 />
    </div>
  );
}

function Group8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 5 / 6">
      <MaskGroup9 />
    </div>
  );
}

function Group56Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 5 / 6:margin">
      <Group8 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <div className="h-[28px] shrink-0 w-[58.61px]" data-name="Heading 3" />
      <div className="h-[22px] shrink-0 w-[94.58px]" data-name="Rectangle" />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container83 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container82 />
    </div>
  );
}

function Overlay5() {
  return <div className="bg-[rgba(0,0,0,0.03)] rounded-[10px] shrink-0 size-[152.01px]" data-name="Overlay" />;
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Overlay5 />
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <Container80 />
    </div>
  );
}

function MaskGroup10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background10 />
    </div>
  );
}

function Group10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 6 / 6">
      <MaskGroup10 />
    </div>
  );
}

function Group66Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 6 / 6:margin">
      <Group10 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[2845.96px]" data-name="Container">
      <Group16Margin />
      <Group26Margin />
      <Group36Margin />
      <Group46Margin />
      <Group56Margin />
      <Group66Margin />
    </div>
  );
}

function TestimonialsComponent() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="testimonials-component">
      <Container51 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[252.5px] relative w-full">
        <Container49 />
        <TestimonialsComponent />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#e8ded4] content-stretch flex flex-col items-start overflow-clip pb-[60px] pt-[40px] relative shrink-0 w-full" data-name="Section">
      <Container48 />
    </div>
  );
}

function MotionElement5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-black text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">Considered design</p>
      </div>
    </div>
  );
}

function Emphasis() {
  return (
    <div className="bg-[#ffe093] content-stretch flex items-start justify-center relative shrink-0" data-name="Emphasis">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">adventure</p>
      </div>
    </div>
  );
}

function Heading2MotionElement1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">{`Designed for `}</p>
      </div>
      <Emphasis />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col gap-[11.6px] items-start relative shrink-0" data-name="Container">
      <MotionElement5 />
      <Heading2MotionElement1 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container86 />
    </div>
  );
}

function Svg21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438.33 438.33">
        <g id="Frame">
          <path d={svgPaths.pa5a700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p3a00c600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1423a400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture() {
  return (
    <div className="h-[438.33px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg21 />
    </div>
  );
}

function MotionElement6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="motion-element">
      <Picture />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_438.33px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <MotionElement6 />
    </div>
  );
}

function MaskGroup11() {
  return (
    <div className="h-[438.33px] relative shrink-0 w-full" data-name="Mask Group">
      <Container89 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px] whitespace-pre-wrap">Considered design</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] w-full whitespace-pre-wrap">
        <p className="mb-0">Crafted with care and intention, this piece blends modern</p>
        <p>aesthetics with timeless comfort—perfect for any season.</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Explore Now</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6 3L11 8L6 13" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg22 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center opacity-50 pt-[8px] relative rounded-[100px] shrink-0" data-name="Link">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container91 />
      <Link7 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[19.99px] items-start relative self-stretch shrink-0 w-[438.33px]" data-name="Container">
      <MaskGroup11 />
      <Container90 />
    </div>
  );
}

function Svg23() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438.34 438.34">
        <g id="Frame">
          <path d={svgPaths.p35500d80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pce1a700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p4e1200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture1() {
  return (
    <div className="h-[438.34px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg23 />
    </div>
  );
}

function MotionElement7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="motion-element">
      <Picture1 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_438.34px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer2}')` }}>
      <MotionElement7 />
    </div>
  );
}

function MaskGroup12() {
  return (
    <div className="h-[438.34px] relative shrink-0 w-full" data-name="Mask Group">
      <Container95 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px] whitespace-pre-wrap">100% Cotton</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] w-full whitespace-pre-wrap">
        <p className="mb-0">Made from soft, breathable 100% cotton, this garment</p>
        <p>delivers all-day comfort and a natural feel against the skin.</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Explore Now</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6 3L11 8L6 13" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg24 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center opacity-50 pt-[8px] relative rounded-[100px] shrink-0" data-name="Link">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container97 />
      <Link8 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0 w-[438.34px]" data-name="Container">
      <MaskGroup12 />
      <Container96 />
    </div>
  );
}

function Svg25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438.34 438.34">
        <g id="Frame">
          <path d={svgPaths.p35500d80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pce1a700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p4e1200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture2() {
  return (
    <div className="h-[438.34px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg25 />
    </div>
  );
}

function MotionElement8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="motion-element">
      <Picture2 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_438.34px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer2}')` }}>
      <MotionElement8 />
    </div>
  );
}

function MaskGroup13() {
  return (
    <div className="h-[438.34px] relative shrink-0 w-full" data-name="Mask Group">
      <Container101 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px] whitespace-pre-wrap">Tailored Protection</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] w-full whitespace-pre-wrap">
        <p className="mb-0">Designed for outdoor adventures, this hoodie offers</p>
        <p className="mb-0">lightweight coverage and flexibility, keeping you</p>
        <p>protected in style.</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Explore Now</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6 3L11 8L6 13" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg26 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center opacity-50 pt-[8px] relative rounded-[100px] shrink-0" data-name="Link">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container103 />
      <Link9 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0 w-[438.34px]" data-name="Container">
      <MaskGroup13 />
      <Container102 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[50px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Container94 />
      <Container100 />
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[252.5px] relative w-full">
        <Container85 />
        <Container87 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[40.01px] relative shrink-0 w-full" data-name="Section">
      <Container84 />
    </div>
  );
}

function MotionElement9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-black uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">IT’S A CLASSIC, MADE BETTER</p>
      </div>
    </div>
  );
}

function Heading2MotionElement2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[40.9px]" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[48px] relative shrink-0 text-[40px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Take your everyday wear</p>
        <p>to the next level.</p>
      </div>
    </div>
  );
}

function MotionElement10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[148.9px]" data-name="motion-element">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="mb-0">Crafted from premium cotton, the Linen Shirt is soft, breathable, and</p>
        <p className="mb-0">full of character. The relaxed silhouette offers generous width without</p>
        <p className="mb-0">excess bulk, while the curved hemline ensures a smooth, flattering fit</p>
        <p>around the waist.</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
          <p className="leading-[30px]">Learn More</p>
        </div>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-black max-w-[520px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-[9px] relative rounded-[inherit]">
        <Container109 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElement11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[276.9px]" data-name="motion-element">
      <Link10 />
    </div>
  );
}

function Container108() {
  return (
    <div className="flex-[1_0_0] h-[324.9px] max-w-[520px] min-h-px min-w-px relative" data-name="Container">
      <MotionElement9 />
      <Heading2MotionElement2 />
      <MotionElement10 />
      <MotionElement11 />
    </div>
  );
}

function Container107() {
  return (
    <div className="flex-[1_0_0] max-w-[707.5px] min-h-px min-w-px relative self-stretch z-[2]" data-name="Container">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] pr-[187.5px] relative size-full">
          <Container108 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute inset-[0_0_-0.25px_-0.25px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 707.5 707.5">
        <g id="Frame">
          <path d={svgPaths.p14c5c100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pe7dff00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1c304a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg27() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.13px_-0.12px_-0.12px_-0.13px] overflow-clip" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function MotionElement12() {
  return (
    <div className="h-[707.5px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg27 />
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_707.5px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer3}')` }}>
      <MotionElement12 />
    </div>
  );
}

function MaskGroup14() {
  return (
    <div className="h-[707.5px] relative shrink-0 w-full" data-name="Mask Group">
      <Container111 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1415px] relative shrink-0 w-[707.5px]" data-name="Container">
      <MaskGroup14 />
    </div>
  );
}

function ContainerAlignCenter() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0 z-[1]" data-name="Container:align-center">
      <Container110 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <ContainerAlignCenter />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start pb-[60px] pt-[40px] px-[252.5px] relative w-full">
        <Container106 />
      </div>
    </div>
  );
}

function Heading2MotionElement3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[370px]" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[42px] relative shrink-0 text-[32px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Today Quality,</p>
        <p>{`Durability & Good Looks`}</p>
      </div>
    </div>
  );
}

function MotionElementSvg() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute inset-[42.19%_45.31%_48.44%_45.31%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75 3.75">
          <path d={svgPaths.p6fe82f0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.19%_62.5%_48.44%_28.13%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75 3.75">
          <path d={svgPaths.p3de63c0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.19%_28.13%_48.44%_62.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75 3.75">
          <path d={svgPaths.pdefeb00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18.75%_12.5%_12.48%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.27%_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 31.506">
            <path d={svgPaths.p2202c680} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[308.3299865722656px] relative shrink-0 w-[40px]" data-name="Container">
      <MotionElementSvg />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[308.3299865722656px] pb-[20px] relative shrink-0 w-[40px]" data-name="Margin">
      <Container113 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#cfbebd] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Currently, 82% feature organic or</p>
        <p>recycled materials</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[308.3299865722656px] relative shrink-0" data-name="Container">
      <Container116 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Margin">
      <Container115 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Organic Cotton</p>
      </div>
      <Margin3 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#5e2723] content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[308.33px]" data-name="Background">
      <Margin2 />
      <Container114 />
    </div>
  );
}

function MotionElementSvg1() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute inset-[12.5%_12.5%_15.63%_15.62%]" data-name="Vector">
        <div className="absolute inset-[-6.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7493 32.7494">
            <path d={svgPaths.p27c00570} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[308.3399963378906px] relative shrink-0 w-[40px]" data-name="Container">
      <MotionElementSvg1 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[308.3399963378906px] pb-[20px] relative shrink-0 w-[40px]" data-name="Margin">
      <Container117 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#cfbebd] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Our Repairs Program revives beloved</p>
        <p>products, keeping them in action.</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[308.3399963378906px] relative shrink-0" data-name="Container">
      <Container120 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Margin">
      <Container119 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Life Cycle</p>
      </div>
      <Margin5 />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#5e2723] content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[308.34px]" data-name="Background">
      <Margin4 />
      <Container118 />
    </div>
  );
}

function MotionElementSvg2() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute bottom-[27.85%] left-1/2 right-1/2 top-[47.15%]" data-name="Vector">
        <div className="absolute inset-[0_-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
            <path d="M2 0V10" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.48%_9.36%_15.63%_9.39%]" data-name="Vector">
        <div className="absolute inset-[-6.95%_-6.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.4981 32.7585">
            <path d={svgPaths.p176ba480} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[308.3299865722656px] relative shrink-0 w-[40px]" data-name="Container">
      <MotionElementSvg2 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[308.3299865722656px] pb-[20px] relative shrink-0 w-[40px]" data-name="Margin">
      <Container121 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#cfbebd] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Orders ship in compostable poly mailers</p>
        <p>and recycled corrugate</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container124 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Margin">
      <Container123 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Recycle Bags</p>
      </div>
      <Margin7 />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#5e2723] content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[308.33px]" data-name="Background">
      <Margin6 />
      <Container122 />
    </div>
  );
}

function MulticolumnIcon() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0 w-[985px]" data-name="multicolumn-icon">
      <Background12 />
      <Background13 />
      <Background14 />
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[60px] items-center justify-center px-[252.5px] relative w-full">
          <Heading2MotionElement3 />
          <MulticolumnIcon />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#5e2723] content-stretch flex flex-col items-start py-[30px] relative shrink-0 w-full" data-name="Section">
      <Container112 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 1080">
        <g id="Frame">
          <path d={svgPaths.p36bc1500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p8b86080} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3464a80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p2a0c7100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p2eabe700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.pf21b700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
          <path d={svgPaths.p3bc90c00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_7" />
          <path d={svgPaths.pc0bd500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_8" />
          <path d={svgPaths.p2e653180} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_9" />
          <path d={svgPaths.p2714f500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_10" />
          <path d={svgPaths.p2cb36f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_11" />
          <path d={svgPaths.p388cc000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_12" />
          <path d={svgPaths.p377c9e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_13" />
          <path d={svgPaths.p2c3a4b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_14" />
          <path d={svgPaths.p1015e9c0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_15" />
          <path d={svgPaths.p1c1c2a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_16" />
          <path d={svgPaths.p36723200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_17" />
          <path d={svgPaths.p23902f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_18" />
          <path d={svgPaths.p9fbf500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_19" />
          <path d={svgPaths.p34ed2100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_20" />
          <path d={svgPaths.p2d548cc0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_21" />
          <path d={svgPaths.p1e0a7300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_22" />
          <path d={svgPaths.p210fa00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_23" />
          <path d={svgPaths.p1e8fd600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_24" />
          <path d={svgPaths.p1b00be00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_25" />
          <path d={svgPaths.p1daa4400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_26" />
          <path d={svgPaths.p202f4e80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_27" />
          <path d={svgPaths.p26390100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_28" />
          <path d={svgPaths.p374e6000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_29" />
          <path d={svgPaths.p3dd3e680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_30" />
          <path d={svgPaths.p94d2680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_31" />
          <path d={svgPaths.p1087ef00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_32" />
          <path d={svgPaths.p27d1b040} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_33" />
          <path d={svgPaths.p3d7bc8f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_34" />
          <path d={svgPaths.pcc2da00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_35" />
          <path d={svgPaths.pcf3e170} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_36" />
          <path d={svgPaths.p11f4c900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_37" />
          <path d={svgPaths.p3384680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_38" />
          <path d={svgPaths.p2d942e80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_39" />
          <path d={svgPaths.p22754200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_40" />
          <path d={svgPaths.p19db3a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_41" />
          <path d={svgPaths.p3e576e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_42" />
          <path d={svgPaths.p36f2c000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_43" />
          <path d={svgPaths.p36d4cc00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_44" />
          <path d={svgPaths.p294ef700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_45" />
          <path d={svgPaths.p1798ed00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_46" />
          <path d={svgPaths.p25aba400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_47" />
          <path d={svgPaths.p37ac2c00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_48" />
          <path d={svgPaths.p1c77aa00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_49" />
          <path d={svgPaths.p22176900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_50" />
          <path d={svgPaths.p1436f070} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_51" />
          <path d={svgPaths.p313c2700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_52" />
          <path d={svgPaths.p2cfbb500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_53" />
          <path d={svgPaths.p2cf0c880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_54" />
          <path d={svgPaths.p2e4e1a80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_55" />
          <g id="Group">
            <path d={svgPaths.p2bc2c300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_56" />
            <path d={svgPaths.pa1d600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_57" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p22068df0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_58" />
            <path d={svgPaths.p2276f680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_59" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Svg28() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function Overlay6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="Overlay">
      <Svg28 />
    </div>
  );
}

function MotionElement13() {
  return (
    <div className="h-[1080px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Overlay6 />
    </div>
  );
}

function ParallaxElement() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="parallax-element">
      <MotionElement13 />
    </div>
  );
}

function Heading2MotionElement4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[65px] relative shrink-0 text-[52px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Crafted from</p>
        <p>natural comfort</p>
      </div>
    </div>
  );
}

function MotionElement14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="mb-0">Our apparel is made with breathable, sustainable</p>
        <p>fabrics—perfect for everyday wear.</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[420px] min-w-[420px] relative shrink-0" data-name="Container">
      <Heading2MotionElement4 />
      <MotionElement14 />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center px-[40px] py-[60px]" data-name="Container">
      <Container127 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <ParallaxElement />
      <div className="absolute bg-black inset-0 opacity-30" data-name="Background" />
      <Container126 />
    </div>
  );
}

function Heading2MotionElement5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[42px] whitespace-pre-wrap">In The Same Style</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading2MotionElement5 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex items-end justify-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container130 />
    </div>
  );
}

function Svg29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.25 331.25">
        <g id="Frame">
          <path d={svgPaths.p11411380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1f418a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p2c43e500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p26da2b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[331.25px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg29 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container137 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container136 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container134 />
      <Container135 />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[331.25px]" data-name="Group - 1 / 8">
      <Container133 />
    </div>
  );
}

function Group18Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 1 / 8:margin">
      <Group1 />
    </div>
  );
}

function Svg30() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.25 331.25">
        <g id="Frame">
          <path d={svgPaths.p11411380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1f418a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p2c43e500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p26da2b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[331.25px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg30 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container142 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Container141 />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container139 />
      <Container140 />
    </div>
  );
}

function Group3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[331.25px]" data-name="Group - 2 / 8">
      <Container138 />
    </div>
  );
}

function Group28Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 2 / 8:margin">
      <Group3 />
    </div>
  );
}

function Svg31() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.25 331.25">
        <g id="Frame">
          <path d={svgPaths.p11411380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1f418a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p2c43e500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p26da2b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[331.25px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg31 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container147 />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Container146 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container144 />
      <Container145 />
    </div>
  );
}

function Group5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[331.25px]" data-name="Group - 3 / 8">
      <Container143 />
    </div>
  );
}

function Group38Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 3 / 8:margin">
      <Group5 />
    </div>
  );
}

function Svg32() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.25 331.25">
        <g id="Frame">
          <path d={svgPaths.p11411380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1f418a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p2c43e500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p26da2b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[331.25px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg32 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container152 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading14 />
      <Container151 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container149 />
      <Container150 />
    </div>
  );
}

function Group7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[331.25px]" data-name="Group - 4 / 8">
      <Container148 />
    </div>
  );
}

function Group48Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 4 / 8:margin">
      <Group7 />
    </div>
  );
}

function Svg33() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.25 331.25">
        <g id="Frame">
          <path d={svgPaths.p11411380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1f418a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p2c43e500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p26da2b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[331.25px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg33 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container157 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading15 />
      <Container156 />
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container154 />
      <Container155 />
    </div>
  );
}

function Group9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[331.25px]" data-name="Group - 5 / 8">
      <Container153 />
    </div>
  );
}

function Group58Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 5 / 8:margin">
      <Group9 />
    </div>
  );
}

function Svg34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.25 331.25">
        <g id="Frame">
          <path d={svgPaths.p11411380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1f418a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p2c43e500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p26da2b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container159() {
  return (
    <div className="h-[331.25px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg34 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container162 />
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading16 />
      <Container161 />
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container159 />
      <Container160 />
    </div>
  );
}

function Group11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[331.25px]" data-name="Group - 6 / 8">
      <Container158 />
    </div>
  );
}

function Group68Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 6 / 8:margin">
      <Group11 />
    </div>
  );
}

function Svg35() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.25 331.25">
        <g id="Frame">
          <path d={svgPaths.p11411380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1f418a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p2c43e500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p26da2b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[331.25px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg35 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container167 />
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading17 />
      <Container166 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container164 />
      <Container165 />
    </div>
  );
}

function Group12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[331.25px]" data-name="Group - 7 / 8">
      <Container163 />
    </div>
  );
}

function Group78Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 7 / 8:margin">
      <Group12 />
    </div>
  );
}

function Svg36() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.25 331.25">
        <g id="Frame">
          <path d={svgPaths.p11411380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1f418a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p2c43e500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p26da2b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container169() {
  return (
    <div className="h-[331.25px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg36 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container172 />
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading18 />
      <Container171 />
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container169 />
      <Container170 />
    </div>
  );
}

function Group13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[331.25px]" data-name="Group - 8 / 8">
      <Container168 />
    </div>
  );
}

function Group88Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 8 / 8:margin">
      <Group13 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[2890px]" data-name="Container">
      <Group18Margin />
      <Group28Margin />
      <Group38Margin />
      <Group48Margin />
      <Group58Margin />
      <Group68Margin />
      <Group78Margin />
      <Group88Margin />
    </div>
  );
}

function FeaturedCollection() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="featured-collection">
      <Container132 />
    </div>
  );
}

function HorizontalDivider() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] h-[2px] relative shrink-0 w-full" data-name="Horizontal Divider">
      <div className="absolute bg-black h-[2px] left-0 top-0 w-[255.8px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Margin8() {
  return (
    <div className="flex-[1_0_0] h-[2px] min-h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pr-[16px] relative size-full">
        <HorizontalDivider />
      </div>
    </div>
  );
}

function Svg37() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2fcd6d80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPreviousSlide1() {
  return (
    <div className="bg-white max-w-[1415px] opacity-50 relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Previous slide">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg37 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Svg38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M7.5 3.75L13.75 10L7.5 16.25" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNextSlide1() {
  return (
    <div className="bg-white max-w-[1415px] relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Next slide">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg38 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Margin8 />
      <ButtonPreviousSlide1 />
      <ButtonNextSlide1 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <FeaturedCollection />
      <Container173 />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container129 />
      <Container131 />
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start pt-[40px] px-[252.5px] relative w-full">
        <Container128 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute inset-[0_0_-0.23px_-0.23px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 657.5 657.5">
        <g id="Frame">
          <path d={svgPaths.pa793100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p162a2900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3c658ac0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg39() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.12px_-0.11px_-0.11px_-0.12px] overflow-clip" data-name="SVG">
      <Frame6 />
    </div>
  );
}

function MotionElementPicture() {
  return (
    <div className="h-[657.5px] overflow-clip relative shrink-0 w-full" data-name="motion-element → Picture">
      <Svg39 />
      <div className="absolute bg-black inset-0 opacity-10" data-name="Background" />
    </div>
  );
}

function Background17() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col items-start justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_657.5px] right-0 rounded-[10px] top-1/2" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPicture />
    </div>
  );
}

function MaskGroup15() {
  return (
    <div className="h-[657.5px] relative shrink-0 w-full" data-name="Mask Group">
      <Background17 />
    </div>
  );
}

function Container175() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[50px] relative size-full">
          <MaskGroup15 />
        </div>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px] whitespace-pre-wrap">Discover more in our FAQs</p>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[28px]">How do I cancel or edit an order?</p>
        </div>
      </div>
    </div>
  );
}

function Svg40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M3.125 10H16.875" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.125 10H16.875" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16.8px] pt-[16px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-b-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Heading20 />
      <Svg40 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] w-full whitespace-pre-wrap">
        <p className="mb-0">Unfortunately, we cannot cancel orders due to a change of mind. However, we</p>
        <p className="mb-0">understand that mistakes happen. If you need to edit your order information, such as</p>
        <p className="mb-0">the delivery address or contact number, please contact our customer service as soon as</p>
        <p className="mb-0">possible.</p>
        <p>Here’s what you can do:</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[14.2px] items-start mb-[-0.4px] relative shrink-0 w-full whitespace-nowrap" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[22.5px] whitespace-pre-wrap">
            <span className="leading-[24px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Contact our customer service via email address, or Live Chat.</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[14.2px] items-start mb-[-0.4px] relative shrink-0 w-full whitespace-nowrap" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[22.5px] whitespace-pre-wrap">
            <span className="leading-[24px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Have your order number ready when contacting customer service.</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="h-[48px] mb-[-0.4px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 top-[11.6px] w-[6.735px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[22.5px] whitespace-pre-wrap">
            <span className="leading-[24px]">{` `}</span>
          </li>
        </ul>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-[20.6px] top-[11.6px] w-[566.79px]">
        <p className="leading-[24px] whitespace-pre-wrap">We cannot guarantee changes to orders after 24 hours of placement. This is</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 top-[35.6px] w-[363.481px]">
        <p className="leading-[24px] whitespace-pre-wrap">because orders may be processed once received</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[0] pb-[0.4px] pl-[20px] relative text-[#4d4d4d] text-[15px] w-full">
        <Item5 />
        <Item6 />
        <Item7 />
      </div>
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[16px] relative shrink-0 w-full" data-name="Slot">
      <Container177 />
      <List2 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary />
      <Slot />
    </div>
  );
}

function Heading21() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[28px]">How can I track my order?</p>
        </div>
      </div>
    </div>
  );
}

function Svg41() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M3.125 10H16.875" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 3.125V16.875" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DetailsSlotSummary3() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16.8px] pt-[12px] relative shrink-0 w-full" data-name="Details → Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading21 />
      <Svg41 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[28px]">What if there is a problem with my order?</p>
        </div>
      </div>
    </div>
  );
}

function Svg42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M3.125 10H16.875" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 3.125V16.875" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DetailsSlotSummary4() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16.8px] pt-[12px] relative shrink-0 w-full" data-name="Details → Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading22 />
      <Svg42 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[28px]">{`I didn't receive all off my order?`}</p>
        </div>
      </div>
    </div>
  );
}

function Svg43() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M3.125 10H16.875" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 3.125V16.875" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DetailsSlotSummary5() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16.8px] pt-[11.99px] relative shrink-0 w-full" data-name="Details → Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading23 />
      <Svg43 />
    </div>
  );
}

function CollapsibleTabs() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="collapsible-tabs">
      <Heading19 />
      <Details />
      <DetailsSlotSummary3 />
      <DetailsSlotSummary4 />
      <DetailsSlotSummary5 />
    </div>
  );
}

function Container176() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[50px] relative size-full">
          <CollapsibleTabs />
        </div>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="Container">
      <Container175 />
      <Container176 />
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start pt-[40px] px-[202.5px] relative w-full">
        <Container174 />
      </div>
    </div>
  );
}

function MotionElementSvg3() {
  return (
    <div className="h-[60px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute inset-[12.5%_12.5%_15.63%_15.62%]" data-name="Vector">
        <div className="absolute inset-[-6.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.124 49.1241">
            <path d={svgPaths.p2fd34400} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[451.6600036621094px] relative shrink-0 w-[60px]" data-name="Container">
      <MotionElementSvg3 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[451.6600036621094px] pb-[20px] relative shrink-0 w-[60px]" data-name="Margin">
      <Container178 />
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">All orders over $120 are delivered to your</p>
        <p>doorstep at no extra charge.</p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] min-w-[320px] relative shrink-0" data-name="Container">
      <Container181 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[12px] relative shrink-0" data-name="Margin">
      <Container180 />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Explore Now</p>
      </div>
    </div>
  );
}

function Svg44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6 3L11 8L6 13" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg44 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <Container183 />
      <Container184 />
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Link11 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0" data-name="Margin">
      <Container182 />
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Free Shipping</p>
      </div>
      <Margin10 />
      <Margin11 />
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative self-stretch" data-name="Background">
      <Margin9 />
      <Container179 />
    </div>
  );
}

function MotionElementSvg4() {
  return (
    <div className="h-[60px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute inset-[12.5%_12.5%_15.63%_15.62%]" data-name="Vector">
        <div className="absolute inset-[-6.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.124 49.1241">
            <path d={svgPaths.p2fd34400} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[451.6600036621094px] relative shrink-0 w-[60px]" data-name="Container">
      <MotionElementSvg4 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[451.6600036621094px] pb-[20px] relative shrink-0 w-[60px]" data-name="Margin">
      <Container185 />
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Enjoy the freedom of stress-free shopping</p>
        <p>with our hassle-free and return policy.</p>
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0" data-name="Container">
      <Container188 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[12px] relative shrink-0" data-name="Margin">
      <Container187 />
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Return Policy</p>
      </div>
    </div>
  );
}

function Svg45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6 3L11 8L6 13" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg45 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <Container190 />
      <Container191 />
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Link12 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0" data-name="Margin">
      <Container189 />
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30-Days Free Returns</p>
      </div>
      <Margin13 />
      <Margin14 />
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative self-stretch" data-name="Background">
      <Margin12 />
      <Container186 />
    </div>
  );
}

function MotionElementSvg5() {
  return (
    <div className="h-[60px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute bottom-[27.85%] left-1/2 right-1/2 top-[47.15%]" data-name="Vector">
        <div className="absolute inset-[0_-3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 15">
            <path d="M3 0V15" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.48%_9.36%_15.63%_9.39%]" data-name="Vector">
        <div className="absolute inset-[-6.95%_-6.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.7471 49.1377">
            <path d={svgPaths.pc2da000} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[451.6600036621094px] relative shrink-0 w-[60px]" data-name="Container">
      <MotionElementSvg5 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[451.6600036621094px] pb-[20px] relative shrink-0 w-[60px]" data-name="Margin">
      <Container192 />
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Shop with confidence knowing your</p>
        <p>payments are secure and your information</p>
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0" data-name="Container">
      <Container195 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[12px] relative shrink-0" data-name="Margin">
      <Container194 />
    </div>
  );
}

function Container197() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">More About Payment</p>
      </div>
    </div>
  );
}

function Svg46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6 3L11 8L6 13" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg46 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center justify-center opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <Container197 />
      <Container198 />
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Link13 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0" data-name="Margin">
      <Container196 />
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
      <Margin16 />
      <Margin17 />
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative self-stretch" data-name="Background">
      <Margin15 />
      <Container193 />
    </div>
  );
}

function MulticolumnIcon1() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0 w-full" data-name="multicolumn-icon">
      <Background18 />
      <Background19 />
      <Background20 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pb-[60px] pt-[40px] px-[252.5px] relative w-full">
        <MulticolumnIcon1 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute inset-[-33.19%_-7.51%_-23.41%_-7.49%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197.789 75.1686">
        <g id="Frame">
          <path d={svgPaths.p1b096de0} id="Vector" stroke="var(--stroke-0, #FFE093)" strokeDasharray="0.21 0.21" strokeWidth="3.32848" />
        </g>
      </svg>
    </div>
  );
}

function Emphasis1() {
  return (
    <div className="absolute content-stretch flex items-start left-[162.95px] top-[47.6px]" data-name="Emphasis">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffe093] text-[40px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">save 15%</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Heading2MotionElement6() {
  return (
    <div className="h-[96px] relative shrink-0 w-[500px]" data-name="Heading 2 → motion-element">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold h-[96px] justify-center leading-[48px] left-0 text-[40px] text-white top-[47.6px] w-[421.37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Sign up for promotion,</p>
        <p>{`offers & `}</p>
      </div>
      <Emphasis1 />
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading2MotionElement6 />
    </div>
  );
}

function Container201() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.5)] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Enter your email</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[100px] self-stretch" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[15.2px] pt-[14.4px] px-[20px] relative size-full">
          <Container201 />
        </div>
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Sign up</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#ffe093] h-[48px] max-w-[565px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container202 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffe093] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8.01px] items-start relative shrink-0 w-full" data-name="Form">
      <Input1 />
      <Button4 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[15px] whitespace-nowrap">
        <p className="decoration-solid leading-[24px] underline">Terms of Use</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[15px] whitespace-nowrap">
        <p className="decoration-solid leading-[24px] underline">Privacy Policy.</p>
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">{`By subscribing you agree to the `}</p>
      </div>
      <Link14 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">{` & `}</p>
      </div>
      <Link15 />
    </div>
  );
}

function MotionElement15() {
  return (
    <div className="content-stretch flex flex-col gap-[15.6px] items-start max-w-[1140px] relative shrink-0 w-[565px]" data-name="motion-element">
      <Form1 />
      <Container203 />
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1140px] relative shrink-0 w-full" data-name="Container">
      <Container200 />
      <MotionElement15 />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#113534] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pb-[60px] pt-[40px] px-[390px] relative w-full">
        <Container199 />
      </div>
    </div>
  );
}

function Heading2MotionElement7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px] whitespace-pre-wrap">We’re on Gram</p>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading2MotionElement7 />
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">@mason.studio</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-50 pb-[2px] relative shrink-0" data-name="Link">
      <Container206 />
      <div className="absolute bg-black bottom-0 h-px left-0 right-0" data-name="Horizontal Divider" />
    </div>
  );
}

function MotionElement16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="motion-element">
      <Link16 />
    </div>
  );
}

function Container204() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[32px] px-[252.5px] relative w-full">
          <Container205 />
          <MotionElement16 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute inset-[0_0_-0.13px_-0.13px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 384">
        <g id="Frame">
          <path d={svgPaths.p6f4ea80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p17541f2} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p103cc400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg47() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame8 />
    </div>
  );
}

function Picture3() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg47 />
    </div>
  );
}

function MotionElement17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture3 />
    </div>
  );
}

function Svg48() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p4c1f300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1015bff0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p909fe80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture4() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg48 />
    </div>
  );
}

function MotionElement18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture4 />
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement18 />
      <Container211 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container212() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame9 />
    </div>
  );
}

function Container209() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container210 />
          <Container212 />
        </div>
      </div>
    </div>
  );
}

function Background22() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <MotionElement17 />
      <Container209 />
    </div>
  );
}

function MaskGroup16() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background22 />
    </div>
  );
}

function Container208() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup16 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute inset-[0_0_-0.13px_-0.13px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 384">
        <g id="Frame">
          <path d={svgPaths.p6f4ea80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p17541f2} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p103cc400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg49() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame10 />
    </div>
  );
}

function Picture5() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg49 />
    </div>
  );
}

function MotionElement19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture5 />
    </div>
  );
}

function Svg50() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p4c1f300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1015bff0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p909fe80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture6() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg50 />
    </div>
  );
}

function MotionElement20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture6 />
    </div>
  );
}

function Container216() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement20 />
      <Container216 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container217() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame11 />
    </div>
  );
}

function Container214() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container215 />
          <Container217 />
        </div>
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <MotionElement19 />
      <Container214 />
    </div>
  );
}

function MaskGroup17() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background23 />
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup17 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute inset-[0_0_-0.13px_-0.13px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 384">
        <g id="Frame">
          <path d={svgPaths.p6f4ea80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p17541f2} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p103cc400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg51() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame12 />
    </div>
  );
}

function Picture7() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg51 />
    </div>
  );
}

function MotionElement21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture7 />
    </div>
  );
}

function Svg52() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p4c1f300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1015bff0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p909fe80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture8() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg52 />
    </div>
  );
}

function MotionElement22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture8 />
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement22 />
      <Container221 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container222() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame13 />
    </div>
  );
}

function Container219() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container220 />
          <Container222 />
        </div>
      </div>
    </div>
  );
}

function Background24() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <MotionElement21 />
      <Container219 />
    </div>
  );
}

function MaskGroup18() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background24 />
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup18 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute inset-[0_0_-0.13px_-0.13px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 384">
        <g id="Frame">
          <path d={svgPaths.p6f4ea80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p17541f2} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p103cc400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg53() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame14 />
    </div>
  );
}

function Picture9() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg53 />
    </div>
  );
}

function MotionElement23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture9 />
    </div>
  );
}

function Svg54() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p4c1f300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1015bff0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p909fe80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture10() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg54 />
    </div>
  );
}

function MotionElement24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture10 />
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container225() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement24 />
      <Container226 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame15 />
    </div>
  );
}

function Container224() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container225 />
          <Container227 />
        </div>
      </div>
    </div>
  );
}

function Background25() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <MotionElement23 />
      <Container224 />
    </div>
  );
}

function MaskGroup19() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background25 />
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup19 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute inset-[0_0_-0.13px_-0.13px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 384">
        <g id="Frame">
          <path d={svgPaths.p6f4ea80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p17541f2} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p103cc400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg55() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame16 />
    </div>
  );
}

function Picture11() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg55 />
    </div>
  );
}

function MotionElement25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture11 />
    </div>
  );
}

function Svg56() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p4c1f300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1015bff0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p909fe80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture12() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg56 />
    </div>
  );
}

function MotionElement26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture12 />
    </div>
  );
}

function Container231() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement26 />
      <Container231 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame17 />
    </div>
  );
}

function Container229() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container230 />
          <Container232 />
        </div>
      </div>
    </div>
  );
}

function Background26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <MotionElement25 />
      <Container229 />
    </div>
  );
}

function MaskGroup20() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background26 />
    </div>
  );
}

function Container228() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup20 />
    </div>
  );
}

function Container236() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container236 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container237() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame18 />
    </div>
  );
}

function Container234() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container235 />
          <Container237 />
        </div>
      </div>
    </div>
  );
}

function Background27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container234 />
    </div>
  );
}

function MaskGroup21() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background27 />
    </div>
  );
}

function Container233() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup21 />
    </div>
  );
}

function Container241() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container240() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container241 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container242() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame19 />
    </div>
  );
}

function Container239() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container240 />
          <Container242 />
        </div>
      </div>
    </div>
  );
}

function Background28() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container239 />
    </div>
  );
}

function MaskGroup22() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background28 />
    </div>
  );
}

function Container238() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup22 />
    </div>
  );
}

function Container207() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-0 top-0" data-name="Container">
      <Container208 />
      <Container213 />
      <Container218 />
      <Container223 />
      <Container228 />
      <Container233 />
      <Container238 />
    </div>
  );
}

function Container247() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container247 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container248() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame20 />
    </div>
  );
}

function Container245() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container246 />
          <Container248 />
        </div>
      </div>
    </div>
  );
}

function Background29() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container245 />
    </div>
  );
}

function MaskGroup23() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background29 />
    </div>
  );
}

function Container244() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup23 />
    </div>
  );
}

function Container252() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container252 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container253() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame21 />
    </div>
  );
}

function Container250() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container251 />
          <Container253 />
        </div>
      </div>
    </div>
  );
}

function Background30() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container250 />
    </div>
  );
}

function MaskGroup24() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background30 />
    </div>
  );
}

function Container249() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup24 />
    </div>
  );
}

function Container257() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container257 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container258() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame22 />
    </div>
  );
}

function Container255() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container256 />
          <Container258 />
        </div>
      </div>
    </div>
  );
}

function Background31() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container255 />
    </div>
  );
}

function MaskGroup25() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background31 />
    </div>
  );
}

function Container254() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup25 />
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container262 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container263() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame23 />
    </div>
  );
}

function Container260() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container261 />
          <Container263 />
        </div>
      </div>
    </div>
  );
}

function Background32() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container260 />
    </div>
  );
}

function MaskGroup26() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background32 />
    </div>
  );
}

function Container259() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup26 />
    </div>
  );
}

function Container267() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container266() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container267 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container268() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame24 />
    </div>
  );
}

function Container265() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container266 />
          <Container268 />
        </div>
      </div>
    </div>
  );
}

function Background33() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container265 />
    </div>
  );
}

function MaskGroup27() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background33 />
    </div>
  );
}

function Container264() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup27 />
    </div>
  );
}

function Container272() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container271() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container272 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container273() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame25 />
    </div>
  );
}

function Container270() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container271 />
          <Container273 />
        </div>
      </div>
    </div>
  );
}

function Background34() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container270 />
    </div>
  );
}

function MaskGroup28() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background34 />
    </div>
  );
}

function Container269() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup28 />
    </div>
  );
}

function Container277() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container276() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container277 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container278() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame26 />
    </div>
  );
}

function Container275() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container276 />
          <Container278 />
        </div>
      </div>
    </div>
  );
}

function Background35() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container275 />
    </div>
  );
}

function MaskGroup29() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background35 />
    </div>
  );
}

function Container274() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup29 />
    </div>
  );
}

function Container243() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[2898px] top-0" data-name="Container">
      <Container244 />
      <Container249 />
      <Container254 />
      <Container259 />
      <Container264 />
      <Container269 />
      <Container274 />
    </div>
  );
}

function Container283() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container282() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container283 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container284() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame27 />
    </div>
  );
}

function Container281() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container282 />
          <Container284 />
        </div>
      </div>
    </div>
  );
}

function Background36() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container281 />
    </div>
  );
}

function MaskGroup30() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background36 />
    </div>
  );
}

function Container280() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup30 />
    </div>
  );
}

function Container288() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container287() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container288 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container289() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame28 />
    </div>
  );
}

function Container286() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container287 />
          <Container289 />
        </div>
      </div>
    </div>
  );
}

function Background37() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container286 />
    </div>
  );
}

function MaskGroup31() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background37 />
    </div>
  );
}

function Container285() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup31 />
    </div>
  );
}

function Container293() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container292() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container293 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container294() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame29 />
    </div>
  );
}

function Container291() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container292 />
          <Container294 />
        </div>
      </div>
    </div>
  );
}

function Background38() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container291 />
    </div>
  );
}

function MaskGroup32() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background38 />
    </div>
  );
}

function Container290() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup32 />
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container297() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container298 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container299() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame30 />
    </div>
  );
}

function Container296() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container297 />
          <Container299 />
        </div>
      </div>
    </div>
  );
}

function Background39() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container296 />
    </div>
  );
}

function MaskGroup33() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background39 />
    </div>
  );
}

function Container295() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup33 />
    </div>
  );
}

function Container303() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container302() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container303 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container304() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame31 />
    </div>
  );
}

function Container301() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container302 />
          <Container304 />
        </div>
      </div>
    </div>
  );
}

function Background40() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container301 />
    </div>
  );
}

function MaskGroup34() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background40 />
    </div>
  );
}

function Container300() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup34 />
    </div>
  );
}

function Container308() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container308 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container309() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame32 />
    </div>
  );
}

function Container306() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container307 />
          <Container309 />
        </div>
      </div>
    </div>
  );
}

function Background41() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container306 />
    </div>
  );
}

function MaskGroup35() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background41 />
    </div>
  );
}

function Container305() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup35 />
    </div>
  );
}

function Container313() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container312() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container313 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container314() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame33 />
    </div>
  );
}

function Container311() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container312 />
          <Container314 />
        </div>
      </div>
    </div>
  );
}

function Background42() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container311 />
    </div>
  );
}

function MaskGroup36() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background42 />
    </div>
  );
}

function Container310() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup36 />
    </div>
  );
}

function Container279() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[5796px] top-0" data-name="Container">
      <Container280 />
      <Container285 />
      <Container290 />
      <Container295 />
      <Container300 />
      <Container305 />
      <Container310 />
    </div>
  );
}

function Container319() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container318() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container319 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container320() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame34 />
    </div>
  );
}

function Container317() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container318 />
          <Container320 />
        </div>
      </div>
    </div>
  );
}

function Background43() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container317 />
    </div>
  );
}

function MaskGroup37() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background43 />
    </div>
  );
}

function Container316() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup37 />
    </div>
  );
}

function Container324() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container323() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container324 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container325() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame35 />
    </div>
  );
}

function Container322() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container323 />
          <Container325 />
        </div>
      </div>
    </div>
  );
}

function Background44() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container322 />
    </div>
  );
}

function MaskGroup38() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background44 />
    </div>
  );
}

function Container321() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup38 />
    </div>
  );
}

function Container329() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container328() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container329 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container330() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame36 />
    </div>
  );
}

function Container327() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container328 />
          <Container330 />
        </div>
      </div>
    </div>
  );
}

function Background45() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container327 />
    </div>
  );
}

function MaskGroup39() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background45 />
    </div>
  );
}

function Container326() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup39 />
    </div>
  );
}

function Container334() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container333() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container334 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container335() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame37 />
    </div>
  );
}

function Container332() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container333 />
          <Container335 />
        </div>
      </div>
    </div>
  );
}

function Background46() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container332 />
    </div>
  );
}

function MaskGroup40() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background46 />
    </div>
  );
}

function Container331() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup40 />
    </div>
  );
}

function Container339() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container338() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container339 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container340() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame38 />
    </div>
  );
}

function Container337() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container338 />
          <Container340 />
        </div>
      </div>
    </div>
  );
}

function Background47() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container337 />
    </div>
  );
}

function MaskGroup41() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background47 />
    </div>
  );
}

function Container336() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup41 />
    </div>
  );
}

function Container344() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container343() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container344 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container345() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame39 />
    </div>
  );
}

function Container342() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container343 />
          <Container345 />
        </div>
      </div>
    </div>
  );
}

function Background48() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container342 />
    </div>
  );
}

function MaskGroup42() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background48 />
    </div>
  );
}

function Container341() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup42 />
    </div>
  );
}

function Container349() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container348() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container349 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container350() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame40 />
    </div>
  );
}

function Container347() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container348 />
          <Container350 />
        </div>
      </div>
    </div>
  );
}

function Background49() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container347 />
    </div>
  );
}

function MaskGroup43() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background49 />
    </div>
  );
}

function Container346() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup43 />
    </div>
  );
}

function Container315() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[8694px] top-0" data-name="Container">
      <Container316 />
      <Container321 />
      <Container326 />
      <Container331 />
      <Container336 />
      <Container341 />
      <Container346 />
    </div>
  );
}

function Container355() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container354() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container355 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container356() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame41 />
    </div>
  );
}

function Container353() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container354 />
          <Container356 />
        </div>
      </div>
    </div>
  );
}

function Background50() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container353 />
    </div>
  );
}

function MaskGroup44() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background50 />
    </div>
  );
}

function Container352() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup44 />
    </div>
  );
}

function Container360() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container359() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container360 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container361() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame42 />
    </div>
  );
}

function Container358() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container359 />
          <Container361 />
        </div>
      </div>
    </div>
  );
}

function Background51() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container358 />
    </div>
  );
}

function MaskGroup45() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background51 />
    </div>
  );
}

function Container357() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup45 />
    </div>
  );
}

function Container365() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container364() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container365 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container366() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame43 />
    </div>
  );
}

function Container363() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container364 />
          <Container366 />
        </div>
      </div>
    </div>
  );
}

function Background52() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container363 />
    </div>
  );
}

function MaskGroup46() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background52 />
    </div>
  );
}

function Container362() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup46 />
    </div>
  );
}

function Container370() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container369() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container370 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container371() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame44 />
    </div>
  );
}

function Container368() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container369 />
          <Container371 />
        </div>
      </div>
    </div>
  );
}

function Background53() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container368 />
    </div>
  );
}

function MaskGroup47() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background53 />
    </div>
  );
}

function Container367() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup47 />
    </div>
  );
}

function Container375() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container374() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container375 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container376() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame45 />
    </div>
  );
}

function Container373() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container374 />
          <Container376 />
        </div>
      </div>
    </div>
  );
}

function Background54() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container373 />
    </div>
  );
}

function MaskGroup48() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background54 />
    </div>
  );
}

function Container372() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup48 />
    </div>
  );
}

function Container380() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container379() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container380 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container381() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame46 />
    </div>
  );
}

function Container378() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container379 />
          <Container381 />
        </div>
      </div>
    </div>
  );
}

function Background55() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container378 />
    </div>
  );
}

function MaskGroup49() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background55 />
    </div>
  );
}

function Container377() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup49 />
    </div>
  );
}

function Container385() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container384() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container385 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container386() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame47 />
    </div>
  );
}

function Container383() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container384 />
          <Container386 />
        </div>
      </div>
    </div>
  );
}

function Background56() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container383 />
    </div>
  );
}

function MaskGroup50() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background56 />
    </div>
  );
}

function Container382() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup50 />
    </div>
  );
}

function Container351() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[11592px] top-0" data-name="Container">
      <Container352 />
      <Container357 />
      <Container362 />
      <Container367 />
      <Container372 />
      <Container377 />
      <Container382 />
    </div>
  );
}

function Container391() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container390() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container391 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container392() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame48 />
    </div>
  );
}

function Container389() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container390 />
          <Container392 />
        </div>
      </div>
    </div>
  );
}

function Background57() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container389 />
    </div>
  );
}

function MaskGroup51() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background57 />
    </div>
  );
}

function Container388() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup51 />
    </div>
  );
}

function Container396() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container395() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container396 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container397() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame49 />
    </div>
  );
}

function Container394() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container395 />
          <Container397 />
        </div>
      </div>
    </div>
  );
}

function Background58() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container394 />
    </div>
  );
}

function MaskGroup52() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background58 />
    </div>
  );
}

function Container393() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup52 />
    </div>
  );
}

function Container401() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container400() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container401 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container402() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame50 />
    </div>
  );
}

function Container399() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container400 />
          <Container402 />
        </div>
      </div>
    </div>
  );
}

function Background59() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container399 />
    </div>
  );
}

function MaskGroup53() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background59 />
    </div>
  );
}

function Container398() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup53 />
    </div>
  );
}

function Container406() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container405() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container406 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container407() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame51 />
    </div>
  );
}

function Container404() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container405 />
          <Container407 />
        </div>
      </div>
    </div>
  );
}

function Background60() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container404 />
    </div>
  );
}

function MaskGroup54() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background60 />
    </div>
  );
}

function Container403() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup54 />
    </div>
  );
}

function Container411() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container410() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container411 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container412() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame52 />
    </div>
  );
}

function Container409() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container410 />
          <Container412 />
        </div>
      </div>
    </div>
  );
}

function Background61() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container409 />
    </div>
  );
}

function MaskGroup55() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background61 />
    </div>
  );
}

function Container408() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup55 />
    </div>
  );
}

function Container416() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container415() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container416 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container417() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame53 />
    </div>
  );
}

function Container414() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container415 />
          <Container417 />
        </div>
      </div>
    </div>
  );
}

function Background62() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container414 />
    </div>
  );
}

function MaskGroup56() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background62 />
    </div>
  );
}

function Container413() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup56 />
    </div>
  );
}

function Container421() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container420() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container421 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container422() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame54 />
    </div>
  );
}

function Container419() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container420 />
          <Container422 />
        </div>
      </div>
    </div>
  );
}

function Background63() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container419 />
    </div>
  );
}

function MaskGroup57() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background63 />
    </div>
  );
}

function Container418() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup57 />
    </div>
  );
}

function Container387() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[14490px] top-0" data-name="Container">
      <Container388 />
      <Container393 />
      <Container398 />
      <Container403 />
      <Container408 />
      <Container413 />
      <Container418 />
    </div>
  );
}

function Container427() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container426() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container427 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container428() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame55 />
    </div>
  );
}

function Container425() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container426 />
          <Container428 />
        </div>
      </div>
    </div>
  );
}

function Background64() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container425 />
    </div>
  );
}

function MaskGroup58() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background64 />
    </div>
  );
}

function Container424() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup58 />
    </div>
  );
}

function Container432() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container431() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container432 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container433() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame56 />
    </div>
  );
}

function Container430() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container431 />
          <Container433 />
        </div>
      </div>
    </div>
  );
}

function Background65() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container430 />
    </div>
  );
}

function MaskGroup59() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background65 />
    </div>
  );
}

function Container429() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup59 />
    </div>
  );
}

function Container437() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container436() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container437 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container438() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame57 />
    </div>
  );
}

function Container435() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container436 />
          <Container438 />
        </div>
      </div>
    </div>
  );
}

function Background66() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container435 />
    </div>
  );
}

function MaskGroup60() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background66 />
    </div>
  );
}

function Container434() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup60 />
    </div>
  );
}

function Container442() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container441() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container442 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container443() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame58 />
    </div>
  );
}

function Container440() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container441 />
          <Container443 />
        </div>
      </div>
    </div>
  );
}

function Background67() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container440 />
    </div>
  );
}

function MaskGroup61() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background67 />
    </div>
  );
}

function Container439() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup61 />
    </div>
  );
}

function Container447() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container446() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container447 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container448() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame59 />
    </div>
  );
}

function Container445() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container446 />
          <Container448 />
        </div>
      </div>
    </div>
  );
}

function Background68() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container445 />
    </div>
  );
}

function MaskGroup62() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background68 />
    </div>
  );
}

function Container444() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup62 />
    </div>
  );
}

function Container452() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container451() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container452 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container453() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame60 />
    </div>
  );
}

function Container450() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container451 />
          <Container453 />
        </div>
      </div>
    </div>
  );
}

function Background69() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container450 />
    </div>
  );
}

function MaskGroup63() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background69 />
    </div>
  );
}

function Container449() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup63 />
    </div>
  );
}

function Container457() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container456() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container457 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container458() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame61 />
    </div>
  );
}

function Container455() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container456 />
          <Container458 />
        </div>
      </div>
    </div>
  );
}

function Background70() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container455 />
    </div>
  );
}

function MaskGroup64() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background70 />
    </div>
  );
}

function Container454() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup64 />
    </div>
  );
}

function Container423() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[17388px] top-0" data-name="Container">
      <Container424 />
      <Container429 />
      <Container434 />
      <Container439 />
      <Container444 />
      <Container449 />
      <Container454 />
    </div>
  );
}

function Container463() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container462() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container463 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container464() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame62 />
    </div>
  );
}

function Container461() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container462 />
          <Container464 />
        </div>
      </div>
    </div>
  );
}

function Background71() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container461 />
    </div>
  );
}

function MaskGroup65() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background71 />
    </div>
  );
}

function Container460() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup65 />
    </div>
  );
}

function Container468() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container467() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container468 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container469() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame63 />
    </div>
  );
}

function Container466() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container467 />
          <Container469 />
        </div>
      </div>
    </div>
  );
}

function Background72() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container466 />
    </div>
  );
}

function MaskGroup66() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background72 />
    </div>
  );
}

function Container465() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup66 />
    </div>
  );
}

function Container473() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container472() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container473 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container474() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame64 />
    </div>
  );
}

function Container471() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container472 />
          <Container474 />
        </div>
      </div>
    </div>
  );
}

function Background73() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container471 />
    </div>
  );
}

function MaskGroup67() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background73 />
    </div>
  );
}

function Container470() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup67 />
    </div>
  );
}

function Container478() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container477() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container478 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container479() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame65 />
    </div>
  );
}

function Container476() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container477 />
          <Container479 />
        </div>
      </div>
    </div>
  );
}

function Background74() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container476 />
    </div>
  );
}

function MaskGroup68() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background74 />
    </div>
  );
}

function Container475() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup68 />
    </div>
  );
}

function Container483() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container482() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container483 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container484() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame66 />
    </div>
  );
}

function Container481() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container482 />
          <Container484 />
        </div>
      </div>
    </div>
  );
}

function Background75() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container481 />
    </div>
  );
}

function MaskGroup69() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background75 />
    </div>
  );
}

function Container480() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup69 />
    </div>
  );
}

function Container488() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container487() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container488 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container489() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame67 />
    </div>
  );
}

function Container486() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container487 />
          <Container489 />
        </div>
      </div>
    </div>
  );
}

function Background76() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container486 />
    </div>
  );
}

function MaskGroup70() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background76 />
    </div>
  );
}

function Container485() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup70 />
    </div>
  );
}

function Container493() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container492() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container493 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container494() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame68 />
    </div>
  );
}

function Container491() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container492 />
          <Container494 />
        </div>
      </div>
    </div>
  );
}

function Background77() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container491 />
    </div>
  );
}

function MaskGroup71() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background77 />
    </div>
  );
}

function Container490() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup71 />
    </div>
  );
}

function Container459() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[20286px] top-0" data-name="Container">
      <Container460 />
      <Container465 />
      <Container470 />
      <Container475 />
      <Container480 />
      <Container485 />
      <Container490 />
    </div>
  );
}

function Container499() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container498() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container499 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container500() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame69 />
    </div>
  );
}

function Container497() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container498 />
          <Container500 />
        </div>
      </div>
    </div>
  );
}

function Background78() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container497 />
    </div>
  );
}

function MaskGroup72() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background78 />
    </div>
  );
}

function Container496() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup72 />
    </div>
  );
}

function Container504() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container503() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container504 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container505() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame70 />
    </div>
  );
}

function Container502() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container503 />
          <Container505 />
        </div>
      </div>
    </div>
  );
}

function Background79() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container502 />
    </div>
  );
}

function MaskGroup73() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background79 />
    </div>
  );
}

function Container501() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup73 />
    </div>
  );
}

function Container509() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container508() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container509 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container510() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame71 />
    </div>
  );
}

function Container507() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container508 />
          <Container510 />
        </div>
      </div>
    </div>
  );
}

function Background80() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container507 />
    </div>
  );
}

function MaskGroup74() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background80 />
    </div>
  );
}

function Container506() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup74 />
    </div>
  );
}

function Container514() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container513() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container514 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container515() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame72 />
    </div>
  );
}

function Container512() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container513 />
          <Container515 />
        </div>
      </div>
    </div>
  );
}

function Background81() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container512 />
    </div>
  );
}

function MaskGroup75() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background81 />
    </div>
  );
}

function Container511() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup75 />
    </div>
  );
}

function Container519() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container518() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container519 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container520() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame73 />
    </div>
  );
}

function Container517() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container518 />
          <Container520 />
        </div>
      </div>
    </div>
  );
}

function Background82() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container517 />
    </div>
  );
}

function MaskGroup76() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background82 />
    </div>
  );
}

function Container516() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup76 />
    </div>
  );
}

function Container524() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container523() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container524 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container525() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame74 />
    </div>
  );
}

function Container522() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container523 />
          <Container525 />
        </div>
      </div>
    </div>
  );
}

function Background83() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container522 />
    </div>
  );
}

function MaskGroup77() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background83 />
    </div>
  );
}

function Container521() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup77 />
    </div>
  );
}

function Container529() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container528() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container529 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container530() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame75 />
    </div>
  );
}

function Container527() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container528 />
          <Container530 />
        </div>
      </div>
    </div>
  );
}

function Background84() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container527 />
    </div>
  );
}

function MaskGroup78() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background84 />
    </div>
  );
}

function Container526() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup78 />
    </div>
  );
}

function Container495() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[23184px] top-0" data-name="Container">
      <Container496 />
      <Container501 />
      <Container506 />
      <Container511 />
      <Container516 />
      <Container521 />
      <Container526 />
    </div>
  );
}

function Container535() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container534() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container535 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container536() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame76 />
    </div>
  );
}

function Container533() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container534 />
          <Container536 />
        </div>
      </div>
    </div>
  );
}

function Background85() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container533 />
    </div>
  );
}

function MaskGroup79() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background85 />
    </div>
  );
}

function Container532() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup79 />
    </div>
  );
}

function Container540() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container539() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container540 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container541() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame77 />
    </div>
  );
}

function Container538() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container539 />
          <Container541 />
        </div>
      </div>
    </div>
  );
}

function Background86() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container538 />
    </div>
  );
}

function MaskGroup80() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background86 />
    </div>
  );
}

function Container537() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup80 />
    </div>
  );
}

function Container545() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container544() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container545 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container546() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame78 />
    </div>
  );
}

function Container543() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container544 />
          <Container546 />
        </div>
      </div>
    </div>
  );
}

function Background87() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container543 />
    </div>
  );
}

function MaskGroup81() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background87 />
    </div>
  );
}

function Container542() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup81 />
    </div>
  );
}

function Container550() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container549() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container550 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container551() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame79 />
    </div>
  );
}

function Container548() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container549 />
          <Container551 />
        </div>
      </div>
    </div>
  );
}

function Background88() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container548 />
    </div>
  );
}

function MaskGroup82() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background88 />
    </div>
  );
}

function Container547() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup82 />
    </div>
  );
}

function Container555() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container554() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container555 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container556() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame80 />
    </div>
  );
}

function Container553() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container554 />
          <Container556 />
        </div>
      </div>
    </div>
  );
}

function Background89() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container553 />
    </div>
  );
}

function MaskGroup83() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background89 />
    </div>
  );
}

function Container552() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup83 />
    </div>
  );
}

function Container560() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container559() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container560 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container561() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame81 />
    </div>
  );
}

function Container558() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container559 />
          <Container561 />
        </div>
      </div>
    </div>
  );
}

function Background90() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container558 />
    </div>
  );
}

function MaskGroup84() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background90 />
    </div>
  );
}

function Container557() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup84 />
    </div>
  );
}

function Container565() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container564() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container565 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container566() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame82 />
    </div>
  );
}

function Container563() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container564 />
          <Container566 />
        </div>
      </div>
    </div>
  );
}

function Background91() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container563 />
    </div>
  );
}

function MaskGroup85() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background91 />
    </div>
  );
}

function Container562() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup85 />
    </div>
  );
}

function Container531() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[26082px] top-0" data-name="Container">
      <Container532 />
      <Container537 />
      <Container542 />
      <Container547 />
      <Container552 />
      <Container557 />
      <Container562 />
    </div>
  );
}

function Container571() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container570() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container571 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container572() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame83 />
    </div>
  );
}

function Container569() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container570 />
          <Container572 />
        </div>
      </div>
    </div>
  );
}

function Background92() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container569 />
    </div>
  );
}

function MaskGroup86() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background92 />
    </div>
  );
}

function Container568() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup86 />
    </div>
  );
}

function Container576() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container575() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container576 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container577() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame84 />
    </div>
  );
}

function Container574() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container575 />
          <Container577 />
        </div>
      </div>
    </div>
  );
}

function Background93() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container574 />
    </div>
  );
}

function MaskGroup87() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background93 />
    </div>
  );
}

function Container573() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup87 />
    </div>
  );
}

function Container581() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container580() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container581 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container582() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame85 />
    </div>
  );
}

function Container579() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container580 />
          <Container582 />
        </div>
      </div>
    </div>
  );
}

function Background94() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container579 />
    </div>
  );
}

function MaskGroup88() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background94 />
    </div>
  );
}

function Container578() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup88 />
    </div>
  );
}

function Container586() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container585() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container586 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container587() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame86 />
    </div>
  );
}

function Container584() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container585 />
          <Container587 />
        </div>
      </div>
    </div>
  );
}

function Background95() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container584 />
    </div>
  );
}

function MaskGroup89() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background95 />
    </div>
  );
}

function Container583() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup89 />
    </div>
  );
}

function Container591() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container590() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container591 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container592() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame87 />
    </div>
  );
}

function Container589() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container590 />
          <Container592 />
        </div>
      </div>
    </div>
  );
}

function Background96() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container589 />
    </div>
  );
}

function MaskGroup90() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background96 />
    </div>
  );
}

function Container588() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup90 />
    </div>
  );
}

function Container596() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container595() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container596 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container597() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame88 />
    </div>
  );
}

function Container594() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container595 />
          <Container597 />
        </div>
      </div>
    </div>
  );
}

function Background97() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container594 />
    </div>
  );
}

function MaskGroup91() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background97 />
    </div>
  );
}

function Container593() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup91 />
    </div>
  );
}

function Container601() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container600() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container601 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p546a600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container602() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame89 />
    </div>
  );
}

function Container599() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container600 />
          <Container602 />
        </div>
      </div>
    </div>
  );
}

function Background98() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container599 />
    </div>
  );
}

function MaskGroup92() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background98 />
    </div>
  );
}

function Container598() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup92 />
    </div>
  );
}

function Container567() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[28980px] top-0" data-name="Container">
      <Container568 />
      <Container573 />
      <Container578 />
      <Container583 />
      <Container588 />
      <Container593 />
      <Container598 />
    </div>
  );
}

function ScrollingPromotion() {
  return (
    <div className="h-[444px] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="scrolling-promotion">
      <Container207 />
      <Container243 />
      <Container279 />
      <Container315 />
      <Container351 />
      <Container387 />
      <Container423 />
      <Container459 />
      <Container495 />
      <Container531 />
      <Container567 />
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#dad5c7] content-stretch flex flex-col items-start pb-[80px] pt-[40px] relative shrink-0 w-full" data-name="Background">
      <Container204 />
      <ScrollingPromotion />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-0 pt-[20px] right-0 top-[197px]" data-name="Main">
      <NavigationBreadcrumbs />
      <ProductInfo />
      <Section />
      <Section1 />
      <Background11 />
      <Section2 />
      <Container125 />
      <Background15 />
      <Background16 />
      <Section3 />
      <Section4 />
      <Background21 />
    </div>
  );
}

function MotionElementSvg6() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute inset-[42.19%_45.31%_48.44%_45.31%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.625 2.625">
          <path d={svgPaths.p3a6ea100} fill="var(--fill-0, #113534)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.19%_62.5%_48.44%_28.13%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.625 2.625">
          <path d={svgPaths.p2dea2d00} fill="var(--fill-0, #113534)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.19%_28.13%_48.44%_62.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.625 2.625">
          <path d={svgPaths.p3608e700} fill="var(--fill-0, #113534)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18.75%_12.5%_12.49%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.27%_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8 22.0542">
            <path d={svgPaths.p14337c00} id="Vector" stroke="var(--stroke-0, #113534)" strokeWidth="2.8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container604() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg6 />
    </div>
  );
}

function Container607() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">Mon-Sat, 9am-6pm EST.</p>
      </div>
    </div>
  );
}

function Container606() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container607 />
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container606 />
    </div>
  );
}

function Container605() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Customer Service</p>
      </div>
      <Margin18 />
    </div>
  );
}

function Background99() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container604 />
      <Container605 />
    </div>
  );
}

function Container603() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background99 />
      <div className="absolute bottom-0 right-[-25px] top-0 w-[0.8px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MotionElementSvg7() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute inset-[12.5%_12.5%_15.63%_15.62%]" data-name="Vector">
        <div className="absolute inset-[-6.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9245 22.9246">
            <path d={svgPaths.p16aa7f00} id="Vector" stroke="var(--stroke-0, #113534)" strokeWidth="2.8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container609() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg7 />
    </div>
  );
}

function Container612() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">+1 888-234-1234 (tool-free)</p>
      </div>
    </div>
  );
}

function Container611() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container612 />
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container611 />
    </div>
  );
}

function Container610() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Call Us</p>
      </div>
      <Margin19 />
    </div>
  );
}

function Background100() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container609 />
      <Container610 />
    </div>
  );
}

function Container608() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background100 />
      <div className="absolute bottom-0 right-[-25px] top-0 w-[0.8px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MotionElementSvg8() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute bottom-[27.85%] left-1/2 right-1/2 top-[47.15%]" data-name="Vector">
        <div className="absolute inset-[0_-1.4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.8 7.00001">
            <path d="M1.4 0V7.00001" id="Vector" stroke="var(--stroke-0, #113534)" strokeWidth="2.8" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.48%_9.36%_15.63%_9.39%]" data-name="Vector">
        <div className="absolute inset-[-6.95%_-6.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5487 22.9309">
            <path d={svgPaths.p3518c800} id="Vector" stroke="var(--stroke-0, #113534)" strokeWidth="2.8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container614() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg8 />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="decoration-solid leading-[24px] underline">touch@masonstore.com</p>
      </div>
    </div>
  );
}

function Container617() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link17 />
    </div>
  );
}

function Container616() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container617 />
    </div>
  );
}

function Margin20() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container616 />
    </div>
  );
}

function Container615() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Get in Touch</p>
      </div>
      <Margin20 />
    </div>
  );
}

function Background101() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container614 />
      <Container615 />
    </div>
  );
}

function Container613() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background101 />
      <div className="absolute bottom-0 right-[-25px] top-0 w-[0.8px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MotionElementSvg9() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="motion-element → SVG">
      <div className="absolute inset-[28.13%_37.5%_46.88%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
            <path d={svgPaths.p35a8ac80} id="Vector" stroke="var(--stroke-0, #113534)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[9.37%_18.75%_9.38%_18.75%]" data-name="Vector">
        <div className="absolute inset-[-6.15%_-8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2 29.2">
            <path d={svgPaths.p2d6f30c0} id="Vector" stroke="var(--stroke-0, #113534)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container618() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[32px]" data-name="Container">
      <MotionElementSvg9 />
    </div>
  );
}

function Container621() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">382 NE 191st St # 87394 Miami</p>
      </div>
    </div>
  );
}

function Container620() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container621 />
    </div>
  );
}

function Margin21() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container620 />
    </div>
  );
}

function Container619() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Address</p>
      </div>
      <Margin21 />
    </div>
  );
}

function Background102() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Background">
      <Container618 />
      <Container619 />
    </div>
  );
}

function MulticolumnIcon2() {
  return (
    <div className="content-stretch flex gap-[50px] items-start justify-center min-h-[52px] relative shrink-0 w-full" data-name="multicolumn-icon">
      <Container603 />
      <Container608 />
      <Container613 />
      <Background102 />
    </div>
  );
}

function SectionSectionsFooterGroup() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[252.5px] py-[32px] right-0 top-[7319.73px]" data-name="Section - sections: footer-group">
      <MulticolumnIcon2 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[250px] relative shrink-0 w-[250px]" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[32px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Find one of our</p>
        <p>11 stores nearest you.</p>
      </div>
    </div>
  );
}

function Container627() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading24 />
    </div>
  );
}

function Container629() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
          <p className="leading-[30px]">Find A Store</p>
        </div>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="bg-black max-w-[728.75px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-[9px] relative rounded-[inherit]">
        <Container629 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container628() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link18 />
    </div>
  );
}

function Container626() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container627 />
      <Container628 />
    </div>
  );
}

function Container625() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container626 />
    </div>
  );
}

function Container624() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[728.75px]" data-name="Container">
      <Container625 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="max-w-[250px] relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[26px]">Company</p>
        </div>
      </div>
    </div>
  );
}

function SlotSummary1() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading25 />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Search</p>
      </div>
    </div>
  );
}

function SlotListItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot → List → Item">
      <Link19 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary1 />
      <SlotListItem />
    </div>
  );
}

function Container630() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details1 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="max-w-[250px] relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[26px]">Collection</p>
        </div>
      </div>
    </div>
  );
}

function SlotSummary2() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading26 />
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Search</p>
      </div>
    </div>
  );
}

function SlotListItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot → List → Item">
      <Link20 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary2 />
      <SlotListItem1 />
    </div>
  );
}

function Container631() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details2 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="max-w-[250px] relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[26px]">Get Help</p>
        </div>
      </div>
    </div>
  );
}

function SlotSummary3() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading27 />
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Search</p>
      </div>
    </div>
  );
}

function SlotListItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot → List → Item">
      <Link21 />
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary3 />
      <SlotListItem2 />
    </div>
  );
}

function Container632() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details3 />
    </div>
  );
}

function Container623() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_30px] items-start relative shrink-0 w-[1415px]" data-name="Container">
      <Container624 />
      <Container630 />
      <Container631 />
      <Container632 />
    </div>
  );
}

function EeSvg() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-[26.667px]" data-name="ee.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 20">
        <g id="Group">
          <path d={svgPaths.p199c5580} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1a7a00} fill="var(--fill-0, white)" id="Vector_2" />
          <path clipRule="evenodd" d="M0 0H26.6667V6.6375H0V0Z" fill="var(--fill-0, #1291FF)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function EeSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="ee.svg fill">
      <EeSvg />
    </div>
  );
}

function Background103() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 size-[20px]" data-name="Background">
      <EeSvgFill />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

function Svg57() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M2.25 7.5L6 3.75L9.75 7.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function LocalizationFormFormButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="localization-form → Form → Button">
      <Background103 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Estonia (EUR €)</p>
      </div>
      <Svg57 />
    </div>
  );
}

function Container637() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.2px] relative shrink-0" data-name="Container">
      <LocalizationFormFormButton />
    </div>
  );
}

function Container636() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container637 />
    </div>
  );
}

function Container635() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0" data-name="Container">
      <Container636 />
    </div>
  );
}

function Container634() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container635 />
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">NANAILS.EU</p>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Powered by Shopify</p>
      </div>
    </div>
  );
}

function Container639() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{`© 2026 `}</p>
      </div>
      <Link22 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{`. `}</p>
      </div>
      <Link23 />
    </div>
  );
}

function Container638() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container639 />
    </div>
  );
}

function Container633() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[31.61px] items-start pt-[40px] px-[252.5px] relative w-full">
        <Container634 />
        <Container638 />
      </div>
    </div>
  );
}

function Container622() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-0.01px] py-[40px] relative shrink-0 w-full" data-name="Container">
      <Container623 />
      <Container633 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 pb-[0.01px] right-0 top-[7435.73px]" data-name="Footer">
      <div className="h-[0.8px] mb-[-0.01px] relative shrink-0 w-[1415px]" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      </div>
      <Container622 />
    </div>
  );
}

function NanailsEu() {
  return (
    <div className="aspect-[65/73] relative self-stretch shrink-0" data-name="NANAILS.EU">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNanailsEu} />
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex items-start max-w-[65px] relative shrink-0" data-name="Link">
      <NanailsEu />
    </div>
  );
}

function Container641() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[65px]" data-name="Container">
      <Link24 />
    </div>
  );
}

function Container644() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[54px] top-[14.4px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.5)] whitespace-nowrap">
        <p className="leading-[normal]">What are you looking for?</p>
      </div>
    </div>
  );
}

function Container646() {
  return <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px" data-name="Container" />;
}

function Container645() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] pr-[4px] right-[50px] top-0" data-name="Container">
      <Container646 />
    </div>
  );
}

function ComboboxListbox() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px overflow-clip relative rounded-[100px]" data-name="Combobox listbox">
      <Container644 />
      <Container645 />
    </div>
  );
}

function Container647() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[30px]">Clear</p>
      </div>
    </div>
  );
}

function ButtonClearSearchTerm() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center opacity-0 right-[15.27px] rounded-[100px] top-0" data-name="Button - Clear search term">
      <Container647 />
    </div>
  );
}

function Svg58() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p452f780} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pdfcfce0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSearch() {
  return (
    <div className="absolute content-stretch flex items-center justify-center right-[16px] top-[12px]" data-name="Button - Search">
      <Svg58 />
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Search">
      <ComboboxListbox />
      <ButtonClearSearchTerm />
      <ButtonSearch />
    </div>
  );
}

function Container643() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Search />
    </div>
  );
}

function PredictiveSearch() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[630px] min-h-px min-w-[630px] relative" data-name="predictive-search">
      <Container643 />
    </div>
  );
}

function Container642() {
  return (
    <div className="content-stretch flex items-center justify-center px-[18px] relative shrink-0 w-[666px]" data-name="Container">
      <PredictiveSearch />
    </div>
  );
}

function Svg59() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p11aa4db0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p39453000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container650() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Sign in/ Register</p>
      </div>
    </div>
  );
}

function LinkAccount() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Link - Account">
      <Svg59 />
      <Container650 />
    </div>
  );
}

function Svg60() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p28d67a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d={svgPaths.p29d0d280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Component3Items() {
  return (
    <div className="absolute bg-black content-stretch flex items-center justify-center pb-[0.9px] pt-[0.1px] right-[-12px] rounded-[12px] size-[24px] top-[-2px]" data-name="3 items">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[22.4px]">3</p>
      </div>
    </div>
  );
}

function Link25() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Link">
      <Svg60 />
      <Component3Items />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pr-[6px] relative shrink-0 w-[54px]" data-name="Link:margin">
      <Link25 />
    </div>
  );
}

function Container649() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative self-stretch shrink-0" data-name="Container">
      <LinkAccount />
      <LinkMargin />
    </div>
  );
}

function Container648() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[660px]" data-name="Container">
      <Container649 />
    </div>
  );
}

function Background104() {
  return (
    <div className="bg-[#ff9b54] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[252.5px] py-[10px] relative w-full">
          <Container641 />
          <Container642 />
          <Container648 />
        </div>
      </div>
    </div>
  );
}

function Container652() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link26() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container652 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link26 />
    </div>
  );
}

function Container653() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Catalog</p>
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container653 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link27 />
    </div>
  );
}

function Container654() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Link28() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container654 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link28 />
    </div>
  );
}

function NavigationPrimaryList() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative self-stretch shrink-0" data-name="Navigation - Primary → List">
      <Item8 />
      <Item9 />
      <Item10 />
    </div>
  );
}

function Container651() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Container">
      <NavigationPrimaryList />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white relative shadow-[0px_4px_17.999px_0px_rgba(0,0,0,0.1)] shrink-0 w-full z-[1]" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col items-start pl-[236.5px] pr-[252.5px] relative w-full">
        <Container651 />
        <div className="absolute bg-white inset-0" data-name="Background" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Header">
      <Background104 />
      <BackgroundShadow />
    </div>
  );
}

function Container640() {
  return (
    <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="Container">
      <Header />
    </div>
  );
}

function Container657() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">✌🏼 Free Express Shipping on orders $120!</p>
      </div>
    </div>
  );
}

function Container656() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-[458.33px]" data-name="Container">
      <Container657 />
    </div>
  );
}

function EeSvg1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-[26.667px]" data-name="ee.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 20">
        <g id="Group">
          <path d={svgPaths.p199c5580} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1a7a00} fill="var(--fill-0, white)" id="Vector_2" />
          <path clipRule="evenodd" d="M0 0H26.6667V6.6375H0V0Z" fill="var(--fill-0, #1291FF)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function EeSvgFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="ee.svg fill">
      <EeSvg1 />
    </div>
  );
}

function Background105() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-72.93px)] rounded-[10px] size-[20px] top-1/2" data-name="Background">
      <EeSvgFill1 />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

function Svg61() {
  return (
    <div className="relative size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M2.25 7.5L6 3.75L9.75 7.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function FormButton() {
  return (
    <div className="h-[20px] relative rounded-[100px] shrink-0 w-[165.85px]" data-name="Form → Button">
      <Background105 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[calc(50%+4.19px)] text-[15px] text-black text-center top-[calc(50%-0.7px)] w-[118.233px]">
        <p className="leading-[15px] whitespace-pre-wrap">Estonia (EUR €)</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+76.93px)] size-[12px] top-1/2">
        <div className="flex-none rotate-180">
          <Svg61 />
        </div>
      </div>
    </div>
  );
}

function LocalizationForm() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="localization-form">
      <FormButton />
    </div>
  );
}

function Container660() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <LocalizationForm />
    </div>
  );
}

function Container659() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container660 />
    </div>
  );
}

function Container658() {
  return (
    <div className="content-center flex flex-wrap items-center justify-end relative shrink-0 w-[458.34px]" data-name="Container">
      <Container659 />
    </div>
  );
}

function Container655() {
  return (
    <div className="content-stretch flex gap-[498.33px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container656 />
      <Container658 />
    </div>
  );
}

function SectionsHeaderGroup() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[252.5px] py-[12px] right-0 top-0" data-name="sections: header-group">
      <Container655 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[7797.73px] left-0 right-0 top-0" data-name="Container">
      <Main />
      <SectionSectionsFooterGroup />
      <Footer />
      <div className="absolute h-[7749.72998046875px] inset-[48px_0_0_0] pointer-events-none">
        <Container640 />
      </div>
      <SectionsHeaderGroup />
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div className="bg-white relative size-full" data-name="1920w default">
      <div className="-translate-y-1/2 absolute flex h-[254.6px] items-center justify-center left-[1880px] max-w-[1920px] top-[calc(50%-0.29px)] w-[40px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "65" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <ButtonDialog />
        </div>
      </div>
      <Container3 />
    </div>
  );
}