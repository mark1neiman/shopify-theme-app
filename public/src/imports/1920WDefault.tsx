import svgPaths from "./svg-o54kj97sxw";
import imgNanailsEu from "figma:asset/130f8557bbf2bade2e7c9765c5990b889e61aacc.png";
import { imgBackground, imgBackground1, imgBackground2, imgBackgroundBorder, imgOverlay, imgBackgroundBorder1, imgOverlay1, imgBackground3, imgBackgroundBorder2, imgContainer, imgContainer1, imgContainer2, imgBackground4, imgContainer3, imgBackground5, imgOverlay2, imgBackground6, imgContainer4, imgOverlay3, imgBackground7 } from "./svg-4oubj";

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

function Frame() {
  return (
    <div className="absolute inset-[0_0_-0.25px_-0.25px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 703.5 703.5">
        <g id="Frame">
          <path d={svgPaths.p2703d100} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p372ab480} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1fa16000} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.12px_-0.12px_-0.13px_-0.13px] overflow-clip" data-name="SVG">
      <Frame />
    </div>
  );
}

function MotionElementPicture() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg1 />
      <div className="absolute bg-black inset-0 opacity-10" data-name="Background" />
    </div>
  );
}

function MotionElement() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">holiday ‘25 collection</p>
      </div>
    </div>
  );
}

function MotionElement1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[52px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[65px]">Relic Relaxed</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop Collection</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[48px] max-w-[320.04998779296875px] opacity-50 relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElement2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="motion-element">
      <Button />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <MotionElement />
      <MotionElement1 />
      <MotionElement2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[32px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
      <MotionElementPicture />
      <Container5 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute inset-[0_711.5px_0_0]" data-name="Mask Group">
      <Background2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[0_0_-0.12px_-0.25px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347.75 703.5">
        <g id="Frame">
          <path d={svgPaths.pce25e80} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1ee3caf0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1a865000} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px_-0.12px_-0.06px_-0.13px] overflow-clip" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function MotionElementPicture1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="motion-element → Picture">
      <Svg2 />
      <div className="absolute bg-black inset-0 opacity-10" data-name="Background" />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col inset-0 items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <MotionElementPicture1 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute inset-[0_355.75px_0_711.5px]" data-name="Mask Group">
      <Background3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute inset-[0_0_-0.12px_-0.12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347.75 347.75">
        <g id="Frame">
          <path d={svgPaths.p3c5ab680} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2d2d1980} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1000c2f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElementPictureSvg() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px] overflow-clip" data-name="motion-element → Picture → SVG">
      <Frame2 />
    </div>
  );
}

function MotionElement3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[180px] pr-[53.46px] relative shrink-0" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[32px] relative shrink-0 text-[22px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Saving 40%</p>
        <p>Surfing</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Starting at $100</p>
      </div>
    </div>
  );
}

function MotionElement4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="motion-element">
      <Container10 />
    </div>
  );
}

function MotionElementMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="motion-element:margin">
      <MotionElement4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[38px] opacity-50 relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[20.8px] py-px relative rounded-[inherit]">
        <Container11 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElement5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative" data-name="motion-element">
      <Button1 />
    </div>
  );
}

function MotionElementMargin1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pt-[32px] relative" data-name="motion-element:margin">
      <MotionElement5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElement3 />
      <MotionElementMargin />
      <MotionElementMargin1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[24px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPictureSvg />
      <Container8 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute inset-[0_0_355.75px_1067.25px]" data-name="Mask Group">
      <Background4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute inset-[0_0_-0.12px_-0.12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347.75 347.75">
        <g id="Frame">
          <path d={svgPaths.p3c5ab680} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2d2d1980} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1000c2f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElementPictureSvg1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px] overflow-clip" data-name="motion-element → Picture → SVG">
      <Frame3 />
    </div>
  );
}

function MotionElement6() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[180px] pr-[12.94px] relative shrink-0" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[32px] relative shrink-0 text-[22px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Holiday</p>
        <p>Seasonal Socks</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Starting at $20</p>
      </div>
    </div>
  );
}

function MotionElement7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="motion-element">
      <Container14 />
    </div>
  );
}

function MotionElementMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="motion-element:margin">
      <MotionElement7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[38px] opacity-50 relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[20.8px] py-px relative rounded-[inherit]">
        <Container15 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElement8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative" data-name="motion-element">
      <Button2 />
    </div>
  );
}

function MotionElementMargin3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pt-[32px] relative" data-name="motion-element:margin">
      <MotionElement8 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElement6 />
      <MotionElementMargin2 />
      <MotionElementMargin3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[24px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPictureSvg1 />
      <Container12 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute inset-[355.75px_0_0_1067.25px]" data-name="Mask Group">
      <Background5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[703.5px] relative shrink-0 w-full" data-name="Container">
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
      <MaskGroup3 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start pt-[40px] px-[252.5px] relative w-full">
        <Container4 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.68 161.67">
        <g id="Frame">
          <path d={svgPaths.p20928600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p26eb1480} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfefb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p33b5bb80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.pbff2000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p33da0ef0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-[-0.03px_-0.03px_-0.02px_-0.03px] items-start justify-center overflow-clip" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function MotionElement9() {
  return (
    <div className="h-[161.68px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg3 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_161.68px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }}>
      <MotionElement9 />
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="h-[161.68px] mb-[-0.01px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.38px] whitespace-pre-wrap">Jackets</p>
      </div>
    </div>
  );
}

function Svg4() {
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

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Svg4 />
      </div>
    </div>
  );
}

function ButtonJackets() {
  return (
    <div className="max-w-[161.67999267578125px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Button - Jackets">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center mb-[-0.01px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <ButtonJackets />
    </div>
  );
}

function LinkJackets() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Jackets">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.01px] pt-[16px] px-[16px] relative w-full">
          <MaskGroup5 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-0.2px_-0.2px_-0.19px_-0.2px] items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.1%_0.08%] mask-size-[99.8%_99.84%] p-px rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder}')` }}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <LinkJackets />
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="relative self-stretch shrink-0 w-[195.28px]" data-name="Mask Group">
      <BackgroundBorder />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.69 161.69">
        <g id="Frame">
          <path d={svgPaths.p2ed77000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1a977000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3d9b5280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pb966e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.peba300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.pc3e7900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-[-0.03px_-0.02px_-0.03px_-0.04px] items-start justify-center overflow-clip" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function MotionElement10() {
  return (
    <div className="h-[161.69px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg5 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_161.69px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay1}')` }}>
      <MotionElement10 />
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="h-[161.69px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.38px] whitespace-pre-wrap">Socks</p>
      </div>
    </div>
  );
}

function Svg6() {
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

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Svg6 />
      </div>
    </div>
  );
}

function ButtonSocks() {
  return (
    <div className="max-w-[161.69000244140625px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Button - Socks">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container20 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <ButtonSocks />
    </div>
  );
}

function LinkSocks() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Socks">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[16px] relative w-full">
          <MaskGroup7 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-0.2px_-0.21px_-0.2px_-0.19px] items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.1%_0.08%] mask-size-[99.8%_99.84%] p-px rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder1}')` }}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <LinkSocks />
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="relative self-stretch shrink-0 w-[195.29px]" data-name="Mask Group">
      <BackgroundBorder1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.69 161.69">
        <g id="Frame">
          <path d={svgPaths.p2ed77000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1a977000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3d9b5280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pb966e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.peba300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.pc3e7900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-[-0.03px] items-start justify-center overflow-clip" data-name="SVG">
      <Frame6 />
    </div>
  );
}

function MotionElement11() {
  return (
    <div className="h-[161.69px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg7 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_161.69px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay1}')` }}>
      <MotionElement11 />
    </div>
  );
}

function MaskGroup9() {
  return (
    <div className="h-[161.69px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.38px] whitespace-pre-wrap">Hats</p>
      </div>
    </div>
  );
}

function Svg8() {
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

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Svg8 />
      </div>
    </div>
  );
}

function ButtonHats() {
  return (
    <div className="max-w-[161.69000244140625px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Button - Hats">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <ButtonHats />
    </div>
  );
}

function LinkHats() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Hats">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[16px] relative w-full">
          <MaskGroup9 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-0.2px] items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.1%_0.08%] mask-size-[99.8%_99.84%] p-px rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder1}')` }}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <LinkHats />
    </div>
  );
}

function MaskGroup8() {
  return (
    <div className="relative self-stretch shrink-0 w-[195.29px]" data-name="Mask Group">
      <BackgroundBorder2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.69 161.69">
        <g id="Frame">
          <path d={svgPaths.p2ed77000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1a977000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3d9b5280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pb966e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.peba300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.pc3e7900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-[-0.03px] items-start justify-center overflow-clip" data-name="SVG">
      <Frame7 />
    </div>
  );
}

function MotionElement12() {
  return (
    <div className="h-[161.69px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg9 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_161.69px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay1}')` }}>
      <MotionElement12 />
    </div>
  );
}

function MaskGroup11() {
  return (
    <div className="h-[161.69px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.38px] whitespace-pre-wrap">Hoodies</p>
      </div>
    </div>
  );
}

function Svg10() {
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

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Svg10 />
      </div>
    </div>
  );
}

function ButtonHoodies() {
  return (
    <div className="max-w-[161.69000244140625px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Button - Hoodies">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <ButtonHoodies />
    </div>
  );
}

function LinkHoodies() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Hoodies">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[16px] relative w-full">
          <MaskGroup11 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-0.2px] items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.1%_0.08%] mask-size-[99.8%_99.84%] p-px rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder1}')` }}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <LinkHoodies />
    </div>
  );
}

function MaskGroup10() {
  return (
    <div className="relative self-stretch shrink-0 w-[195.29px]" data-name="Mask Group">
      <BackgroundBorder3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.69 161.69">
        <g id="Frame">
          <path d={svgPaths.p2848f200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1817bf0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3767e600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p1218e200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.peba300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p3166a900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-[-0.03px] items-start justify-center overflow-clip" data-name="SVG">
      <Frame8 />
    </div>
  );
}

function MotionElement13() {
  return (
    <div className="h-[161.69px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg11 />
    </div>
  );
}

function Overlay4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_161.69px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay1}')` }}>
      <MotionElement13 />
    </div>
  );
}

function MaskGroup13() {
  return (
    <div className="h-[161.69px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.38px] whitespace-pre-wrap">Sweaters</p>
      </div>
    </div>
  );
}

function Svg12() {
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

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Svg12 />
      </div>
    </div>
  );
}

function ButtonSweaters() {
  return (
    <div className="max-w-[161.69000244140625px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Button - Sweaters">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container26 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <ButtonSweaters />
    </div>
  );
}

function LinkSweaters() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Sweaters">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[16px] relative w-full">
          <MaskGroup13 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-0.2px] items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.1%_0.08%] mask-size-[99.8%_99.84%] p-px rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder1}')` }}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <LinkSweaters />
    </div>
  );
}

function MaskGroup12() {
  return (
    <div className="relative self-stretch shrink-0 w-[195.29px]" data-name="Mask Group">
      <BackgroundBorder4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.69 161.69">
        <g id="Frame">
          <path d={svgPaths.p2ed77000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1a977000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3d9b5280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pb966e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.peba300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.pc3e7900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-[-0.03px] items-start justify-center overflow-clip" data-name="SVG">
      <Frame9 />
    </div>
  );
}

function MotionElement14() {
  return (
    <div className="h-[161.69px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg13 />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_161.69px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay1}')` }}>
      <MotionElement14 />
    </div>
  );
}

function MaskGroup15() {
  return (
    <div className="h-[161.69px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay5 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.38px] whitespace-pre-wrap">Puffers</p>
      </div>
    </div>
  );
}

function Svg14() {
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

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Svg14 />
      </div>
    </div>
  );
}

function ButtonPuffers() {
  return (
    <div className="max-w-[161.69000244140625px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Button - Puffers">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <ButtonPuffers />
    </div>
  );
}

function LinkPuffers() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Puffers">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[16px] relative w-full">
          <MaskGroup15 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-0.2px_-0.19px_-0.2px_-0.21px] items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.11%_0.08%] mask-size-[99.8%_99.84%] p-px rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder1}')` }}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <LinkPuffers />
    </div>
  );
}

function MaskGroup14() {
  return (
    <div className="relative self-stretch shrink-0 w-[195.29px]" data-name="Mask Group">
      <BackgroundBorder5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.69 161.69">
        <g id="Frame">
          <path d={svgPaths.p2ed77000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1a977000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3d9b5280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pb966e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.peba300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.pc3e7900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-[-0.03px] items-start justify-center overflow-clip" data-name="SVG">
      <Frame10 />
    </div>
  );
}

function MotionElement15() {
  return (
    <div className="h-[161.69px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg15 />
    </div>
  );
}

function Overlay6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_161.69px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay1}')` }}>
      <MotionElement15 />
    </div>
  );
}

function MaskGroup17() {
  return (
    <div className="h-[161.69px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay6 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.38px] whitespace-pre-wrap">Shorts</p>
      </div>
    </div>
  );
}

function Svg16() {
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

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Svg16 />
      </div>
    </div>
  );
}

function ButtonShorts() {
  return (
    <div className="max-w-[161.69000244140625px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Button - Shorts">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <ButtonShorts />
    </div>
  );
}

function LinkShorts() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Shorts">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[16px] relative w-full">
          <MaskGroup17 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-0.2px] items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.1%_0.08%] mask-size-[99.8%_99.84%] p-px rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder1}')` }}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <LinkShorts />
    </div>
  );
}

function MaskGroup16() {
  return (
    <div className="relative self-stretch shrink-0 w-[195.29px]" data-name="Mask Group">
      <BackgroundBorder6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <MaskGroup4 />
      <MaskGroup6 />
      <MaskGroup8 />
      <MaskGroup10 />
      <MaskGroup12 />
      <MaskGroup14 />
      <MaskGroup16 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[252.5px] relative w-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-black uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">The Last Chance</p>
      </div>
    </div>
  );
}

function MotionElement16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="motion-element">
      <Container33 />
    </div>
  );
}

function Container32() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%+0.05px)]" data-name="Container">
      <MotionElement16 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-center left-[63.05px] top-[10px] w-[4.85px]" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[20px]">:</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[40px]">05</p>
      </div>
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[42px] relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-w-[58px] pr-[16px] top-0" data-name="Margin">
      <Container34 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-center left-[57.86px] top-[10px] w-[4.85px]" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[20px]">:</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[4.86px] pr-[0.29px] relative w-full">
          <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
            <p className="leading-[40px]">13</p>
          </div>
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[42px] relative shrink-0" data-name="Container">
      <Container38 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[65.47px] min-w-[74px] px-[16px] top-0" data-name="Margin">
      <Container37 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-center left-[55.57px] top-[10px] w-[4.85px]" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[20px]">:</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[40px]">13</p>
      </div>
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[42px] relative shrink-0" data-name="Container">
      <Container41 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[141.76px] min-w-[74px] px-[16px] top-0" data-name="Margin">
      <Container40 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[40px]">47</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[42px] relative shrink-0" data-name="Container">
      <Container44 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[215.76px] min-w-[58px] pl-[16px] top-0" data-name="Margin">
      <Container43 />
    </div>
  );
}

function CountdownTimer() {
  return (
    <div className="h-[40px] relative shrink-0 w-[279.95px]" data-name="countdown-timer">
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function MotionElement17() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[290.48px] top-1/2" data-name="motion-element">
      <CountdownTimer />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="mb-0">Save on trendy clothing, best</p>
        <p>sellers + more</p>
      </div>
    </div>
  );
}

function MotionElement18() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[716.06px] max-w-[220px] top-1/2" data-name="motion-element">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
          <p className="leading-[30px]">Copy Code: FLASH30</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-black h-[48px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container47 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-black bottom-[65.07px] content-stretch flex flex-col items-start left-[35.03%] opacity-0 pb-[2.57px] pt-[1.89px] px-[13.6px] right-[35.15%] rounded-[6px]" data-name="Background">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffe093] text-[11.5px] whitespace-nowrap">
        <p className="leading-[18.36px]">Copied</p>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[-5.34px] h-[6.94px] left-[calc(50%-0.14px)] w-[13.87px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-black border-l-[9.6px] border-r-[9.6px] border-solid border-t-[9.6px] inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button3 />
      <Background7 />
    </div>
  );
}

function MotionElement19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[1086.29px] top-1/2" data-name="motion-element">
      <Container46 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <MotionElement17 />
      <MotionElement18 />
      <MotionElement19 />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#ffe093] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_140px] px-[50px] py-[46px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container31 />
    </div>
  );
}

function MaskGroup18() {
  return (
    <div className="h-[180px] relative shrink-0 w-[1415px]" data-name="Mask Group">
      <Background6 />
    </div>
  );
}

function Heading2MotionElement() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[42px] whitespace-pre-wrap">The Winter Lineup</p>
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

function Tab() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[2px] relative shrink-0" data-name="Tab">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">New Arrivals</p>
      </div>
      <div className="absolute bg-black bottom-0 h-px left-0 right-[0.01px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 pb-[2px] relative shrink-0" data-name="Tab">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Hot Items</p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 pb-[2px] relative shrink-0" data-name="Tab">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Best Sellers</p>
      </div>
    </div>
  );
}

function Tablist() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_32px] items-start justify-end relative shrink-0 w-full" data-name="Tablist">
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function MotionElement20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="motion-element">
      <Tablist />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[16px] items-end justify-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <MotionElement20 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container54 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[1156px] top-0" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container59 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[289px] right-[867px] top-0" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg19 />
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

function Container65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container64 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] right-[578px] top-0" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg20 />
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

function Container70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container70 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Container69 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[867px] right-[289px] top-0" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Svg21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg21 />
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

function Container75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Container74 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1156px] right-0 top-0" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Svg22() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg22 />
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

function Container80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading14 />
      <Container79 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[1156px] top-[359.5px]" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Svg23() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg23 />
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

function Container85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container85 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading15 />
      <Container84 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[289px] right-[867px] top-[359.5px]" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Svg24() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg24 />
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

function Container90() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container90 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading16 />
      <Container89 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] right-[578px] top-[359.5px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Svg25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg25 />
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

function Container95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container95 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading17 />
      <Container94 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[867px] right-[289px] top-[359.5px]" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Svg26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 259">
        <g id="Frame">
          <path d={svgPaths.p160d5880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p25e133f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pfde8c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.pc608b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[259px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg26 />
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

function Container100() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container100 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading18 />
      <Container99 />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1156px] right-0 top-[359.5px]" data-name="Container">
      <Container97 />
      <Container98 />
    </div>
  );
}

function FeaturedCollection() {
  return (
    <div className="h-[689px] relative shrink-0 w-full" data-name="featured-collection">
      <Container51 />
      <Container56 />
      <Container61 />
      <Container66 />
      <Container71 />
      <Container76 />
      <Container81 />
      <Container86 />
      <Container91 />
      <Container96 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <FeaturedCollection />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start pb-[60px] pt-[40px] px-[252.5px] relative w-full">
        <Container48 />
      </div>
    </div>
  );
}

function MotionElement21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-black text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">Effortless Elegance</p>
      </div>
    </div>
  );
}

function Emphasis() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ffe093] content-stretch flex items-start justify-center left-[calc(50%+234.56px)] top-[-0.4px]" data-name="Emphasis">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">{`shoes & bags`}</p>
      </div>
    </div>
  );
}

function Emphasis1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ffe093] content-stretch flex items-start justify-center left-[calc(50%+0.04px)] top-[47.6px]" data-name="Emphasis">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">boots</p>
      </div>
    </div>
  );
}

function Heading2MotionElement1() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] left-[calc(50%-126.16px)] text-[40px] text-black text-center top-[23.6px] w-[469.223px]" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px] whitespace-pre-wrap">{`Explore our collection of `}</p>
      </div>
      <Emphasis />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] left-[calc(50%-148.95px)] text-[40px] text-black text-center top-[71.6px] w-[189.677px]" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px] whitespace-pre-wrap">{`from chic `}</p>
      </div>
      <Emphasis1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] left-[calc(50%+149.23px)] text-[40px] text-black text-center top-[71.6px] w-[189.807px]" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px] whitespace-pre-wrap">{` to loafers`}</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start min-w-[820px] relative shrink-0" data-name="Container">
      <MotionElement21 />
      <Heading2MotionElement1 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container102 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute inset-[0_0_-0.12px_-0.12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347.75 347.75">
        <g id="Frame">
          <path d={svgPaths.p3c5ab680} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2d2d1980} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1000c2f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px] overflow-clip" data-name="SVG">
      <Frame11 />
    </div>
  );
}

function MotionElementPicture2() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg27 />
      <div className="absolute bg-black inset-0 opacity-30" data-name="Background" />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[99px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">chino pant</p>
      </div>
    </div>
  );
}

function MotionElement22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="motion-element">
      <Container107 />
    </div>
  );
}

function MotionElementMargin4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[16px] relative" data-name="motion-element:margin">
      <MotionElement22 />
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop Now</p>
        </div>
      </div>
    </div>
  );
}

function MotionElementButton() {
  return (
    <div className="bg-white h-[48px] opacity-50 relative rounded-[100px] shrink-0" data-name="motion-element → Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container108 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElementMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0" data-name="motion-element:margin">
      <MotionElementButton />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElementMargin4 />
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[38px]">Chino Pant</p>
      </div>
      <MotionElementMargin5 />
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[24px]" data-name="Container">
      <Container106 />
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-black h-[347.75px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_347.75px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPicture2 />
      <Container105 />
    </div>
  );
}

function MaskGroup19() {
  return (
    <div className="h-[347.75px] relative shrink-0 w-full" data-name="Mask Group">
      <Background10 />
    </div>
  );
}

function Group3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[347.75px]" data-name="Group - 1 / 6">
      <MaskGroup19 />
    </div>
  );
}

function Group16Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[355.75px]" data-name="Group - 1 / 6:margin">
      <Group3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute inset-[0_0_-0.12px_-0.12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347.75 347.75">
        <g id="Frame">
          <path d={svgPaths.p3c5ab680} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2d2d1980} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1000c2f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg28() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px] overflow-clip" data-name="SVG">
      <Frame12 />
    </div>
  );
}

function MotionElementPicture3() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg28 />
      <div className="absolute bg-black inset-0 opacity-30" data-name="Background" />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[99px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">sweater</p>
      </div>
    </div>
  );
}

function MotionElement23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="motion-element">
      <Container111 />
    </div>
  );
}

function MotionElementMargin6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[16px] relative" data-name="motion-element:margin">
      <MotionElement23 />
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop Now</p>
        </div>
      </div>
    </div>
  );
}

function MotionElementButton1() {
  return (
    <div className="bg-white h-[48px] opacity-50 relative rounded-[100px] shrink-0" data-name="motion-element → Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container112 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElementMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0" data-name="motion-element:margin">
      <MotionElementButton1 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElementMargin6 />
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[38px]">Retro Sweater</p>
      </div>
      <MotionElementMargin7 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[24px]" data-name="Container">
      <Container110 />
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-black h-[347.75px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_347.75px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPicture3 />
      <Container109 />
    </div>
  );
}

function MaskGroup20() {
  return (
    <div className="h-[347.75px] relative shrink-0 w-full" data-name="Mask Group">
      <Background11 />
    </div>
  );
}

function Group10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[347.75px]" data-name="Group - 2 / 6">
      <MaskGroup20 />
    </div>
  );
}

function Group26Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[355.75px]" data-name="Group - 2 / 6:margin">
      <Group10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute inset-[0_0_-0.12px_-0.12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347.75 347.75">
        <g id="Frame">
          <path d={svgPaths.p3c5ab680} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2d2d1980} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1000c2f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px] overflow-clip" data-name="SVG">
      <Frame13 />
    </div>
  );
}

function MotionElementPicture4() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg29 />
      <div className="absolute bg-black inset-0 opacity-30" data-name="Background" />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[99px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">Puffers</p>
      </div>
    </div>
  );
}

function MotionElement24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="motion-element">
      <Container115 />
    </div>
  );
}

function MotionElementMargin8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[16px] relative" data-name="motion-element:margin">
      <MotionElement24 />
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop Now</p>
        </div>
      </div>
    </div>
  );
}

function MotionElementButton2() {
  return (
    <div className="bg-white h-[48px] opacity-50 relative rounded-[100px] shrink-0" data-name="motion-element → Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container116 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElementMargin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0" data-name="motion-element:margin">
      <MotionElementButton2 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElementMargin8 />
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[38px]">Cotton Made</p>
      </div>
      <MotionElementMargin9 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[24px]" data-name="Container">
      <Container114 />
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-black h-[347.75px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_347.75px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPicture4 />
      <Container113 />
    </div>
  );
}

function MaskGroup21() {
  return (
    <div className="h-[347.75px] relative shrink-0 w-full" data-name="Mask Group">
      <Background12 />
    </div>
  );
}

function Group17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[347.75px]" data-name="Group - 3 / 6">
      <MaskGroup21 />
    </div>
  );
}

function Group36Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[355.75px]" data-name="Group - 3 / 6:margin">
      <Group17 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute inset-[0_0_-0.12px_-0.12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347.75 347.75">
        <g id="Frame">
          <path d={svgPaths.p3c5ab680} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2d2d1980} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1000c2f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg30() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px] overflow-clip" data-name="SVG">
      <Frame14 />
    </div>
  );
}

function MotionElementPicture5() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg30 />
      <div className="absolute bg-black inset-0 opacity-30" data-name="Background" />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[99px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">shorts</p>
      </div>
    </div>
  );
}

function MotionElement25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="motion-element">
      <Container119 />
    </div>
  );
}

function MotionElementMargin10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[16px] relative" data-name="motion-element:margin">
      <MotionElement25 />
    </div>
  );
}

function Container120() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop Now</p>
        </div>
      </div>
    </div>
  );
}

function MotionElementButton3() {
  return (
    <div className="bg-white h-[48px] opacity-50 relative rounded-[100px] shrink-0" data-name="motion-element → Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container120 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElementMargin11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0" data-name="motion-element:margin">
      <MotionElementButton3 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElementMargin10 />
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[38px]">Casual Shorts</p>
      </div>
      <MotionElementMargin11 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[24px]" data-name="Container">
      <Container118 />
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-black h-[347.75px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_347.75px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPicture5 />
      <Container117 />
    </div>
  );
}

function MaskGroup22() {
  return (
    <div className="h-[347.75px] relative shrink-0 w-full" data-name="Mask Group">
      <Background13 />
    </div>
  );
}

function Group21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[347.75px]" data-name="Group - 4 / 6">
      <MaskGroup22 />
    </div>
  );
}

function Group46Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[355.75px]" data-name="Group - 4 / 6:margin">
      <Group21 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute inset-[0_0_-0.12px_-0.12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347.75 347.75">
        <g id="Frame">
          <path d={svgPaths.p3c5ab680} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2d2d1980} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1000c2f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg31() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px] overflow-clip" data-name="SVG">
      <Frame15 />
    </div>
  );
}

function MotionElementPicture6() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg31 />
      <div className="absolute bg-black inset-0 opacity-30" data-name="Background" />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[99px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">Flannel</p>
      </div>
    </div>
  );
}

function MotionElement26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="motion-element">
      <Container123 />
    </div>
  );
}

function MotionElementMargin12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[16px] relative" data-name="motion-element:margin">
      <MotionElement26 />
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop Now</p>
        </div>
      </div>
    </div>
  );
}

function MotionElementButton4() {
  return (
    <div className="bg-white h-[48px] opacity-50 relative rounded-[100px] shrink-0" data-name="motion-element → Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container124 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElementMargin13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0" data-name="motion-element:margin">
      <MotionElementButton4 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElementMargin12 />
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[38px]">Made Cotton</p>
      </div>
      <MotionElementMargin13 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[24px]" data-name="Container">
      <Container122 />
    </div>
  );
}

function Background14() {
  return (
    <div className="absolute bg-black h-[347.75px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_347.75px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPicture6 />
      <Container121 />
    </div>
  );
}

function MaskGroup23() {
  return (
    <div className="h-[347.75px] relative shrink-0 w-full" data-name="Mask Group">
      <Background14 />
    </div>
  );
}

function Group25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[347.75px]" data-name="Group - 5 / 6">
      <MaskGroup23 />
    </div>
  );
}

function Group56Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[355.75px]" data-name="Group - 5 / 6:margin">
      <Group25 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute inset-[0_0_-0.12px_-0.12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347.75 347.75">
        <g id="Frame">
          <path d={svgPaths.p3c5ab680} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2d2d1980} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1000c2f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg32() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px] overflow-clip" data-name="SVG">
      <Frame16 />
    </div>
  );
}

function MotionElementPicture7() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg32 />
      <div className="absolute bg-black inset-0 opacity-30" data-name="Background" />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[99px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">Tees</p>
      </div>
    </div>
  );
}

function MotionElement27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="motion-element">
      <Container127 />
    </div>
  );
}

function MotionElementMargin14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[16px] relative" data-name="motion-element:margin">
      <MotionElement27 />
    </div>
  );
}

function Container128() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop Now</p>
        </div>
      </div>
    </div>
  );
}

function MotionElementButton5() {
  return (
    <div className="bg-white h-[48px] opacity-50 relative rounded-[100px] shrink-0" data-name="motion-element → Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container128 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElementMargin15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0" data-name="motion-element:margin">
      <MotionElementButton5 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElementMargin14 />
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[38px]">Souvenir Tee</p>
      </div>
      <MotionElementMargin15 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[24px]" data-name="Container">
      <Container126 />
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute bg-black h-[347.75px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_347.75px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPicture7 />
      <Container125 />
    </div>
  );
}

function MaskGroup24() {
  return (
    <div className="h-[347.75px] relative shrink-0 w-full" data-name="Mask Group">
      <Background15 />
    </div>
  );
}

function Group28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[347.75px]" data-name="Group - 6 / 6">
      <MaskGroup24 />
    </div>
  );
}

function Group66Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[355.75px]" data-name="Group - 6 / 6:margin">
      <Group28 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[2134.5px]" data-name="Container">
      <Group16Margin />
      <Group26Margin />
      <Group36Margin />
      <Group46Margin />
      <Group56Margin />
      <Group66Margin />
    </div>
  );
}

function ImageCards() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[2119px]" data-name="image-cards">
      <Container104 />
    </div>
  );
}

function HorizontalDivider() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] h-[2px] relative shrink-0 w-full" data-name="Horizontal Divider">
      <div className="absolute bg-black h-[2px] left-0 top-0 w-[1279px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Margin4() {
  return (
    <div className="flex-[1_0_0] h-[2px] min-h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pr-[16px] relative size-full">
        <HorizontalDivider />
      </div>
    </div>
  );
}

function Svg33() {
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
    <div className="bg-white max-w-[1415px] relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Previous slide">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg33 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Svg34() {
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
    <div className="bg-white max-w-[1415px] opacity-50 relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Next slide">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg34 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Margin4 />
      <ButtonPreviousSlide />
      <ButtonNextSlide />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full" data-name="Container">
      <ImageCards />
      <Container129 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[252.5px] py-[60px] relative w-full">
        <Container101 />
        <Container103 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <div className="h-[0.8px] relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      </div>
      <Background9 />
    </div>
  );
}

function Heading2MotionElement2() {
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

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[308.3299865722656px] relative shrink-0 w-[40px]" data-name="Container">
      <MotionElementSvg />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[308.3299865722656px] pb-[20px] relative shrink-0 w-[40px]" data-name="Margin">
      <Container131 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#cfbebd] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Currently, 82% feature organic or</p>
        <p>recycled materials</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[308.3299865722656px] relative shrink-0" data-name="Container">
      <Container134 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Margin">
      <Container133 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Organic Cotton</p>
      </div>
      <Margin6 />
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#5e2723] content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[308.33px]" data-name="Background">
      <Margin5 />
      <Container132 />
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

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[308.3399963378906px] relative shrink-0 w-[40px]" data-name="Container">
      <MotionElementSvg1 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[308.3399963378906px] pb-[20px] relative shrink-0 w-[40px]" data-name="Margin">
      <Container135 />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#cfbebd] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Our Repairs Program revives beloved</p>
        <p>products, keeping them in action.</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[308.3399963378906px] relative shrink-0" data-name="Container">
      <Container138 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Margin">
      <Container137 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Life Cycle</p>
      </div>
      <Margin8 />
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#5e2723] content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[308.34px]" data-name="Background">
      <Margin7 />
      <Container136 />
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

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[308.3299865722656px] relative shrink-0 w-[40px]" data-name="Container">
      <MotionElementSvg2 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[308.3299865722656px] pb-[20px] relative shrink-0 w-[40px]" data-name="Margin">
      <Container139 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#cfbebd] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Orders ship in compostable poly mailers</p>
        <p>and recycled corrugate</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container142 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Margin">
      <Container141 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Recycle Bags</p>
      </div>
      <Margin10 />
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#5e2723] content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[308.33px]" data-name="Background">
      <Margin9 />
      <Container140 />
    </div>
  );
}

function MulticolumnIcon() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0 w-[985px]" data-name="multicolumn-icon">
      <Background16 />
      <Background17 />
      <Background18 />
    </div>
  );
}

function Container130() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[60px] items-center justify-center px-[252.5px] relative w-full">
          <Heading2MotionElement2 />
          <MulticolumnIcon />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#5e2723] content-stretch flex flex-col items-start py-[50px] relative shrink-0 w-full" data-name="Section">
      <Container130 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 630">
        <g id="Frame">
          <path d={svgPaths.p23940780} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2c7b8c00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p24e7a680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p27fcb900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p34d5b480} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p2dbe0e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
          <path d={svgPaths.p394ea500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_7" />
          <path d={svgPaths.p11c52000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_8" />
          <path d={svgPaths.p27391a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_9" />
          <path d={svgPaths.p3da386f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_10" />
          <path d={svgPaths.p3931f200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_11" />
          <path d={svgPaths.p3895e000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_12" />
          <path d={svgPaths.p2586b600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_13" />
          <path d={svgPaths.p7746d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_14" />
          <path d={svgPaths.p3fac4500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_15" />
          <path d={svgPaths.p1c0985a0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_16" />
          <path d={svgPaths.p3da10980} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_17" />
          <path d={svgPaths.p253b6b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_18" />
          <path d={svgPaths.p3c3c2df0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_19" />
          <path d={svgPaths.p24239a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_20" />
          <path d={svgPaths.p36b3a280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_21" />
          <path d={svgPaths.p2439acc0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_22" />
          <path d={svgPaths.p22c67e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_23" />
          <path d={svgPaths.p1e4f1e40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_24" />
          <path d={svgPaths.p18ec8680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_25" />
          <path d={svgPaths.p2b82bb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_26" />
          <path d={svgPaths.p2c37fa80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_27" />
          <path d={svgPaths.p18d23600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_28" />
          <path d={svgPaths.p131aee00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_29" />
          <path d={svgPaths.pf0fce00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_30" />
          <path d={svgPaths.p3ac4c800} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_31" />
          <path d={svgPaths.pd2ea600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_32" />
          <path d={svgPaths.p102619b0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_33" />
          <path d={svgPaths.p1dc8d400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_34" />
          <path d={svgPaths.p1a378440} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_35" />
          <path d={svgPaths.p3d5c1600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_36" />
          <path d={svgPaths.p30a45c00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_37" />
          <path d={svgPaths.p2790fe00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_38" />
          <path d={svgPaths.p3ce1ed00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_39" />
          <path d={svgPaths.pa5e6180} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_40" />
          <path d={svgPaths.p324fb900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_41" />
          <path d={svgPaths.p1249c200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_42" />
          <path d={svgPaths.p29554500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_43" />
          <path d={svgPaths.p36ed5470} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_44" />
          <path d={svgPaths.p2f93d800} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_45" />
          <path d={svgPaths.p296c7700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_46" />
          <path d={svgPaths.p17fd86c0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_47" />
          <path d={svgPaths.p20d14700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_48" />
          <path d={svgPaths.p1853d280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_49" />
          <path d={svgPaths.p3b414f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_50" />
          <path d={svgPaths.p62c7c00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_51" />
          <path d={svgPaths.p15c23980} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_52" />
          <path d={svgPaths.p32d96400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_53" />
          <path d={svgPaths.p30f3f100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_54" />
          <path d={svgPaths.paa03380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_55" />
          <g id="Group">
            <path d={svgPaths.p13178380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_56" />
            <path d={svgPaths.p2c826500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_57" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p1b4fff00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_58" />
            <path d={svgPaths.p10b7f2c0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_59" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MotionElementSvg3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="motion-element → SVG">
      <Frame17 />
    </div>
  );
}

function Svg35() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 218 218">
        <g id="Frame">
          <path d={svgPaths.p17d6db00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2c051f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p37b69a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p1467480} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[218px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg35 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container151 />
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading19 />
      <Container150 />
    </div>
  );
}

function Container147() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Container148 />
        <Container149 />
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 w-[250px]" data-name="Background">
      <Container147 />
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center py-[60px]" data-name="Container">
      <Background20 />
    </div>
  );
}

function Container145() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElementSvg3 />
      <Container146 />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[960px]" data-name="Group - 1 / 3">
      <Container145 />
    </div>
  );
}

function MotionElementSvg4() {
  return <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0" data-name="motion-element → SVG" />;
}

function Container156() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container155() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container156 />
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container155 />
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[16px] pt-[234px] px-[16px] relative rounded-[10px] shrink-0 w-[250px]" data-name="Background">
      <Container154 />
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center py-[60px]" data-name="Container">
      <Background21 />
    </div>
  );
}

function Container152() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElementSvg4 />
      <Container153 />
    </div>
  );
}

function Group7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[960px]" data-name="Group - 2 / 3">
      <Container152 />
    </div>
  );
}

function Container161() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container160() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container161 />
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container160 />
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[16px] pt-[234px] px-[16px] relative rounded-[10px] shrink-0 w-[250px]" data-name="Background">
      <Container159 />
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center py-[60px]" data-name="Container">
      <Background22 />
    </div>
  );
}

function Container157() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <Container158 />
    </div>
  );
}

function Group14() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[960px]" data-name="Group - 3 / 3">
      <Container157 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-[2880px]" data-name="Container">
      <Group />
      <Group7 />
      <Group14 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[630px] overflow-clip relative self-stretch shrink-0 w-[960px]" data-name="Container">
      <Container144 />
    </div>
  );
}

function MotionElement28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-black uppercase w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px] whitespace-pre-wrap">Our Favorite Products</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <MotionElement28 />
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[42px] relative shrink-0 text-[32px] text-black w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">“A versatile beach staple. Crafted from 100%</p>
        <p className="mb-0">cotton and perfectly sized for lounging or</p>
        <p>changing”</p>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Jenny Wilson</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d5655] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">New Mexico</p>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading20 />
      <Container166 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container164 />
      <Container165 />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[686px]" data-name="Group - 1 / 3">
      <Container163 />
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[42px] relative shrink-0 text-[32px] text-black w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">“Incredibly warm and lightweight—this</p>
        <p className="mb-0">jacket is perfect for chilly days and looks</p>
        <p>great too!”</p>
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Cienna Leigh</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d5655] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">California</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading21 />
      <Container170 />
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container168 />
      <Container169 />
    </div>
  );
}

function Group8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[686px]" data-name="Group - 2 / 3">
      <Container167 />
    </div>
  );
}

function Container172() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Container" />;
}

function Container171() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 3" />
      <Container172 />
    </div>
  );
}

function Group15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[158px] relative self-stretch shrink-0 w-[686px]" data-name="Group - 3 / 3">
      <Container171 />
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[2058px]" data-name="Container">
      <Group1 />
      <Group8 />
      <Group15 />
    </div>
  );
}

function MotionElement29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Container162 />
    </div>
  );
}

function Svg36() {
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
    <div className="content-stretch flex items-center justify-center max-w-[700.4000244140625px] opacity-50 overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-name="Button - Previous slide">
      <Svg36 />
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[15px]">1</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[15px]">3</p>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex items-start justify-center min-w-[34px] pl-[7.54px] pr-[7.55px] relative shrink-0" data-name="Container">
      <Container175 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[15px]">/</p>
      </div>
      <Container176 />
    </div>
  );
}

function Svg37() {
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
    <div className="content-stretch flex items-center justify-center max-w-[700.4000244140625px] overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-name="Button - Next slide">
      <Svg37 />
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0 w-[700.4px]" data-name="Container">
      <ButtonPreviousSlide1 />
      <Container174 />
      <ButtonNextSlide1 />
    </div>
  );
}

function MotionElement30() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-[693.4px]" data-name="motion-element">
      <Container173 />
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-[#d0dbd3] content-stretch flex flex-col gap-[40px] items-end justify-center p-[60px] relative self-stretch shrink-0 w-[806.4px]" data-name="Background">
      <Heading1 />
      <MotionElement29 />
      <MotionElement30 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 630">
        <g id="Frame">
          <path d={svgPaths.p2683cc80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1303ec00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pbea0d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p19b8cd00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p31fb900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p37b72f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
          <path d={svgPaths.p21f17800} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_7" />
          <path d={svgPaths.pd448b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_8" />
          <path d={svgPaths.p92adf00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_9" />
          <path d={svgPaths.p2d89a5f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_10" />
          <path d={svgPaths.p2e36d580} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_11" />
          <path d={svgPaths.p1f713e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_12" />
          <path d={svgPaths.p2b100100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_13" />
          <path d={svgPaths.p1297c80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_14" />
          <path d={svgPaths.p13a62380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_15" />
          <path d={svgPaths.p49a6800} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_16" />
          <path d={svgPaths.p1e97ab50} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_17" />
          <path d={svgPaths.p3165e700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_18" />
          <path d={svgPaths.p2b179a80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_19" />
          <path d={svgPaths.p26ba800} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_20" />
          <path d={svgPaths.p15dd42c0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_21" />
          <path d={svgPaths.p326d3a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_22" />
          <path d={svgPaths.paf18e00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_23" />
          <path d={svgPaths.p6698300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_24" />
          <path d={svgPaths.p223bc300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_25" />
          <path d={svgPaths.p2c10e600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_26" />
          <path d={svgPaths.p27010c00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_27" />
          <path d={svgPaths.pbd15100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_28" />
          <path d={svgPaths.p52ad600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_29" />
          <path d={svgPaths.p17e1b580} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_30" />
          <path d={svgPaths.p1cade500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_31" />
          <path d={svgPaths.p32a3f2f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_32" />
          <path d={svgPaths.p54b2500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_33" />
          <path d={svgPaths.p25f85480} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_34" />
          <path d={svgPaths.p2d354280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_35" />
          <path d={svgPaths.p6275880} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_36" />
          <path d={svgPaths.p97a1100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_37" />
          <path d={svgPaths.p18a09200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_38" />
        </g>
      </svg>
    </div>
  );
}

function MotionElementSvg5() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="motion-element → SVG">
      <Frame18 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-0 top-0 w-[960px]" data-name="Group - 1 / 3">
      <MotionElementSvg5 />
    </div>
  );
}

function Group9() {
  return <div className="absolute bottom-0 left-[960px] top-0 w-[960px]" data-name="Group - 2 / 3" />;
}

function Group16() {
  return <div className="absolute bottom-0 left-[1920px] top-0 w-[960px]" data-name="Group - 3 / 3" />;
}

function Container178() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Container">
      <Group2 />
      <Group9 />
      <Group16 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[630px] relative self-stretch shrink-0 w-[960px]" data-name="Container">
      <Container178 />
    </div>
  );
}

function FavoriteProducts() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="favorite-products">
      <Container143 />
      <Background23 />
      <Container177 />
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <FavoriteProducts />
    </div>
  );
}

function Heading2MotionElement3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[42px] whitespace-pre-wrap">Shop By Campaign</p>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading2MotionElement3 />
    </div>
  );
}

function Svg38() {
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

function ButtonPreviousSlide2() {
  return (
    <div className="bg-white opacity-50 relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Previous slide">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg38 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Svg39() {
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

function ButtonNextSlide2() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Next slide">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg39 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function MotionElement31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="motion-element">
      <ButtonPreviousSlide2 />
      <ButtonNextSlide2 />
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container181 />
      <MotionElement31 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228.34 228.3">
        <g id="Frame">
          <path d={svgPaths.p3d21ab80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1952fbf0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p31614300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p21360180} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p20b88a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p4ec3280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg40() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Frame19 />
    </div>
  );
}

function MotionElement32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="motion-element">
      <Svg40 />
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.04px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0px] mask-size-[99.98%_228.3px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <MotionElement32 />
    </div>
  );
}

function MaskGroup26() {
  return (
    <div className="relative shrink-0 size-[228.3px]" data-name="Mask Group">
      <Container185 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.43">
        <g id="Frame">
          <path d={svgPaths.p14e93080} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p21eb6500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p13802d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p37254f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Svg41() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame20 />
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <Svg41 />
    </div>
  );
}

function MaskGroup27() {
  return (
    <div className="h-[73.43px] relative shrink-0 w-full" data-name="Mask Group">
      <Container187 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.44">
        <g id="Frame">
          <path d={svgPaths.p3617cd00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1958d680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p2ed16300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p320ff680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Svg42() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame21 />
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer2}')` }}>
      <Svg42 />
    </div>
  );
}

function MaskGroup28() {
  return (
    <div className="h-[73.44px] relative shrink-0 w-full" data-name="Mask Group">
      <Container188 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.43">
        <g id="Frame">
          <path d={svgPaths.p33505970} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p3e73ca00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p13802d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p37254f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Svg43() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame22 />
    </div>
  );
}

function Container189() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <Svg43 />
    </div>
  );
}

function MaskGroup29() {
  return (
    <div className="h-[73.43px] relative shrink-0 w-full" data-name="Mask Group">
      <Container189 />
    </div>
  );
}

function Container186() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] inset-[0_0_0_76%] items-start justify-center" data-name="Container">
      <MaskGroup27 />
      <MaskGroup28 />
      <MaskGroup29 />
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <MaskGroup26 />
      <Container186 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[30px] whitespace-pre-wrap">{`Collection's name`}</p>
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">0 Items</p>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Heading22 />
      <Container192 />
    </div>
  );
}

function Container193() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
          <p className="leading-[30px]">Shop</p>
        </div>
      </div>
    </div>
  );
}

function LinkCollectionsName() {
  return (
    <div className="bg-black h-[38px] max-w-[305.6499938964844px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link - Collection\'s name">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[20.8px] py-px relative rounded-[inherit]">
        <Container193 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container191 />
      <LinkCollectionsName />
    </div>
  );
}

function Container183() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[12px] relative w-full">
        <Container184 />
        <Container190 />
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] p-[0.8px] rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder2}')` }}>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container183 />
    </div>
  );
}

function MaskGroup25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <BackgroundBorder7 />
    </div>
  );
}

function Group4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[0.4px] relative w-[331.25px]" data-name="Group - 1 / 7">
      <MaskGroup25 />
    </div>
  );
}

function Group17Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 1 / 7:margin">
      <Group4 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228.34 228.3">
        <g id="Frame">
          <path d={svgPaths.p21910a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2f9cf680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p19468200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p151cea00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Svg44() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Frame23 />
    </div>
  );
}

function MotionElement33() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="motion-element">
      <Svg44 />
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.04px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0px] mask-size-[99.98%_228.3px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <MotionElement33 />
    </div>
  );
}

function MaskGroup31() {
  return (
    <div className="relative shrink-0 size-[228.3px]" data-name="Mask Group">
      <Container196 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.43">
        <g id="Frame">
          <path d={svgPaths.p2d353100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1b914280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pbfc1080} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg45() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame24 />
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <Svg45 />
    </div>
  );
}

function MaskGroup32() {
  return (
    <div className="h-[73.43px] relative shrink-0 w-full" data-name="Mask Group">
      <Container198 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.44">
        <g id="Frame">
          <path d={svgPaths.p279e3600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p141beaf0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p13c8ae78} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg46() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame25 />
    </div>
  );
}

function Container199() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer2}')` }}>
      <Svg46 />
    </div>
  );
}

function MaskGroup33() {
  return (
    <div className="h-[73.44px] relative shrink-0 w-full" data-name="Mask Group">
      <Container199 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.43">
        <g id="Frame">
          <path d={svgPaths.p3f45d400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1b914280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pbfc1080} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg47() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame26 />
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <Svg47 />
    </div>
  );
}

function MaskGroup34() {
  return (
    <div className="h-[73.43px] relative shrink-0 w-full" data-name="Mask Group">
      <Container200 />
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] inset-[0_0_0_76%] items-start justify-center" data-name="Container">
      <MaskGroup32 />
      <MaskGroup33 />
      <MaskGroup34 />
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <MaskGroup31 />
      <Container197 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[30px] whitespace-pre-wrap">{`Collection's name`}</p>
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">0 Items</p>
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Heading23 />
      <Container203 />
    </div>
  );
}

function Container204() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
          <p className="leading-[30px]">Shop</p>
        </div>
      </div>
    </div>
  );
}

function LinkCollectionsName1() {
  return (
    <div className="bg-black h-[38px] max-w-[305.6499938964844px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link - Collection\'s name">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[20.8px] py-px relative rounded-[inherit]">
        <Container204 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container201() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0 w-full" data-name="Container">
      <Container202 />
      <LinkCollectionsName1 />
    </div>
  );
}

function Container194() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[12px] relative w-full">
        <Container195 />
        <Container201 />
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] p-[0.8px] rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder2}')` }}>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container194 />
    </div>
  );
}

function MaskGroup30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <BackgroundBorder8 />
    </div>
  );
}

function Group11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[0.4px] relative w-[331.25px]" data-name="Group - 2 / 7">
      <MaskGroup30 />
    </div>
  );
}

function Group27Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 2 / 7:margin">
      <Group11 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228.34 228.3">
        <g id="Frame">
          <path d={svgPaths.p38857600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pf575200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p8d8a700} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p1533400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p1234d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Svg48() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Frame27 />
    </div>
  );
}

function MotionElement34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="motion-element">
      <Svg48 />
    </div>
  );
}

function Container207() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.04px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0px] mask-size-[99.98%_228.3px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <MotionElement34 />
    </div>
  );
}

function MaskGroup36() {
  return (
    <div className="relative shrink-0 size-[228.3px]" data-name="Mask Group">
      <Container207 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.43">
        <g id="Frame">
          <path d={svgPaths.p13dc25f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1f8c9b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Svg49() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame28 />
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <Svg49 />
    </div>
  );
}

function MaskGroup37() {
  return (
    <div className="h-[73.43px] relative shrink-0 w-full" data-name="Mask Group">
      <Container209 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.44">
        <g id="Frame">
          <path d={svgPaths.p290bf280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1a787600} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Svg50() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame29 />
    </div>
  );
}

function Container210() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer2}')` }}>
      <Svg50 />
    </div>
  );
}

function MaskGroup38() {
  return (
    <div className="h-[73.44px] relative shrink-0 w-full" data-name="Mask Group">
      <Container210 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.43">
        <g id="Frame">
          <path d={svgPaths.p2c820b00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pba47c40} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Svg51() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame30 />
    </div>
  );
}

function Container211() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <Svg51 />
    </div>
  );
}

function MaskGroup39() {
  return (
    <div className="h-[73.43px] relative shrink-0 w-full" data-name="Mask Group">
      <Container211 />
    </div>
  );
}

function Container208() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] inset-[0_0_0_76%] items-start justify-center" data-name="Container">
      <MaskGroup37 />
      <MaskGroup38 />
      <MaskGroup39 />
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <MaskGroup36 />
      <Container208 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[30px] whitespace-pre-wrap">Hats</p>
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">0 Items</p>
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Heading24 />
      <Container214 />
    </div>
  );
}

function Container215() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
          <p className="leading-[30px]">Shop</p>
        </div>
      </div>
    </div>
  );
}

function LinkHats1() {
  return (
    <div className="bg-black h-[38px] max-w-[305.6499938964844px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link - Hats">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[20.8px] py-px relative rounded-[inherit]">
        <Container215 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container212() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container213 />
      <LinkHats1 />
    </div>
  );
}

function Container205() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[12px] relative w-full">
        <Container206 />
        <Container212 />
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] p-[0.8px] rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder2}')` }}>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container205 />
    </div>
  );
}

function MaskGroup35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <BackgroundBorder9 />
    </div>
  );
}

function Group18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[0.4px] relative w-[331.25px]" data-name="Group - 3 / 7">
      <MaskGroup35 />
    </div>
  );
}

function Group37Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 3 / 7:margin">
      <Group18 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228.34 228.3">
        <g id="Frame">
          <path d={svgPaths.p910afc0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p34e68900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3a41c500} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p16a72a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Svg52() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Frame31 />
    </div>
  );
}

function MotionElement35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="motion-element">
      <Svg52 />
    </div>
  );
}

function Container218() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.04px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0px] mask-size-[99.98%_228.3px] right-0 rounded-[10px] top-0" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <MotionElement35 />
    </div>
  );
}

function MaskGroup41() {
  return (
    <div className="relative shrink-0 size-[228.3px]" data-name="Mask Group">
      <Container218 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.43">
        <g id="Frame">
          <path d={svgPaths.p2de44200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p3943b800} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p19dc9680} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg53() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame32 />
    </div>
  );
}

function Container220() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <Svg53 />
    </div>
  );
}

function MaskGroup42() {
  return (
    <div className="h-[73.43px] relative shrink-0 w-full" data-name="Mask Group">
      <Container220 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.44">
        <g id="Frame">
          <path d={svgPaths.p296beec0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p165f3100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pad68f0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg54() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame33 />
    </div>
  );
}

function Container221() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer2}')` }}>
      <Svg54 />
    </div>
  );
}

function MaskGroup43() {
  return (
    <div className="h-[73.44px] relative shrink-0 w-full" data-name="Mask Group">
      <Container221 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.3656 73.43">
        <g id="Frame">
          <path d={svgPaths.p2de44200} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2b686900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p15dcf100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg55() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame34 />
    </div>
  );
}

function Container222() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_-0.02px] items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.02%_0%] mask-size-[99.98%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <Svg55 />
    </div>
  );
}

function MaskGroup44() {
  return (
    <div className="h-[73.43px] relative shrink-0 w-full" data-name="Mask Group">
      <Container222 />
    </div>
  );
}

function Container219() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] inset-[0_0_0_76%] items-start justify-center" data-name="Container">
      <MaskGroup42 />
      <MaskGroup43 />
      <MaskGroup44 />
    </div>
  );
}

function Container217() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <MaskGroup41 />
      <Container219 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[30px] whitespace-pre-wrap">{`Collection's name`}</p>
      </div>
    </div>
  );
}

function Container225() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">0 Items</p>
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Heading25 />
      <Container225 />
    </div>
  );
}

function Container226() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
          <p className="leading-[30px]">Shop</p>
        </div>
      </div>
    </div>
  );
}

function LinkCollectionsName2() {
  return (
    <div className="bg-black h-[38px] max-w-[305.6499938964844px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link - Collection\'s name">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[20.8px] py-px relative rounded-[inherit]">
        <Container226 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container224 />
      <LinkCollectionsName2 />
    </div>
  );
}

function Container216() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[12px] relative w-full">
        <Container217 />
        <Container223 />
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] p-[0.8px] rounded-[10px]" data-name="Background+Border" style={{ maskImage: `url('${imgBackgroundBorder2}')` }}>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container216 />
    </div>
  );
}

function MaskGroup40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <BackgroundBorder10 />
    </div>
  );
}

function Group22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[0.4px] relative w-[331.25px]" data-name="Group - 4 / 7">
      <MaskGroup40 />
    </div>
  );
}

function Group47Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[361.25px]" data-name="Group - 4 / 7:margin">
      <Group22 />
    </div>
  );
}

function Group57Margin() {
  return <div className="self-stretch shrink-0 w-[361.25px]" data-name="Group - 5 / 7:margin" />;
}

function Group67Margin() {
  return <div className="self-stretch shrink-0 w-[361.25px]" data-name="Group - 6 / 7:margin" />;
}

function Group77Margin() {
  return <div className="self-stretch shrink-0 w-[361.25px]" data-name="Group - 7 / 7:margin" />;
}

function Container182() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[2528.75px]" data-name="Container">
      <Group17Margin />
      <Group27Margin />
      <Group37Margin />
      <Group47Margin />
      <Group57Margin />
      <Group67Margin />
      <Group77Margin />
    </div>
  );
}

function CollectionCards() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="collection-cards">
      <Container182 />
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container180 />
      <CollectionCards />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[60px] px-[252.5px] relative w-full">
        <Container179 />
      </div>
    </div>
  );
}

function MotionElement36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-black uppercase w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px] whitespace-pre-wrap">Seasonal Edition</p>
      </div>
    </div>
  );
}

function Heading2MotionElement4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[48px] relative shrink-0 text-[40px] text-black w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">The October Cleaner</p>
        <p>Fashion</p>
      </div>
    </div>
  );
}

function MotionElement37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] w-full whitespace-pre-wrap">
        <p className="mb-0">We create safe products that really work and are</p>
        <p>designed to make you feel good.</p>
      </div>
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Container">
      <MotionElement36 />
      <Heading2MotionElement4 />
      <MotionElement37 />
    </div>
  );
}

function Container229() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pb-[32px] right-0 top-0" data-name="Container">
      <Container230 />
    </div>
  );
}

function Container231() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
          <p className="leading-[30px]">Shop All Products</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-black max-w-[395.25px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-[9px] relative rounded-[inherit]">
        <Container231 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElement38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Link />
    </div>
  );
}

function MotionElementMargin16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[32px] right-0 top-[356.9px]" data-name="motion-element:margin">
      <MotionElement38 />
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Outerwear Collection</p>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Container232 />
          <div className="absolute bg-black bottom-0 left-0 top-0 w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container233() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Cashmere Sweaters</p>
      </div>
    </div>
  );
}

function Tab4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Container233 />
          <div className="absolute bg-black bottom-0 left-0 opacity-0 top-0 w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container234() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">The Cold Weather</p>
      </div>
    </div>
  );
}

function Tab5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Container234 />
          <div className="absolute bg-black bottom-0 left-0 opacity-0 top-0 w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function MotionElement39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Tab3 />
      <Tab4 />
      <Tab5 />
    </div>
  );
}

function Tablist1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[224.9px]" data-name="Tablist">
      <div className="absolute bg-[rgba(0,0,0,0.1)] bottom-0 left-0 top-0 w-[2px]" data-name="Vertical Divider" />
      <MotionElement39 />
    </div>
  );
}

function Container228() {
  return (
    <div className="h-[436.9px] shrink-0 sticky top-0 w-full" data-name="Container">
      <Container229 />
      <MotionElementMargin16 />
      <Tablist1 />
    </div>
  );
}

function Container227() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[100px] relative size-full">
        <Container228 />
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[33px] relative self-stretch shrink-0 w-[495.25px]" data-name="Margin">
      <Container227 />
    </div>
  );
}

function Svg56() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455.88 607.832">
        <g id="Frame">
          <path d={svgPaths.p39294600} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pb94d500} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p149c5a00} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture() {
  return (
    <div className="h-[607.83px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg56 />
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 opacity-40 to-[rgba(0,0,0,0.7)]" data-name="Gradient" />
    </div>
  );
}

function MotionElement40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture />
    </div>
  );
}

function Svg57() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Frame">
          <path d={svgPaths.pfcd000} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p320ec900} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p27906b00} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p197faa70} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container240() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Svg57 />
    </div>
  );
}

function Container239() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[50px_50px] rounded-[6px] top-1/2 w-[50px]" data-name="Container" style={{ maskImage: `url('${imgContainer3}')` }}>
      <Container240 />
    </div>
  );
}

function MaskGroup46() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Mask Group">
      <Container239 />
    </div>
  );
}

function Container242() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-white w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container244() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-white w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container243() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container244 />
    </div>
  );
}

function Container241() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.3px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container242 />
      <Container243 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[35px] bg-[rgba(255,255,255,0.1)] relative shrink-0 w-full" data-name="Overlay+OverlayBlur">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <MaskGroup46 />
          <Container241 />
        </div>
      </div>
    </div>
  );
}

function Container238() {
  return (
    <div className="absolute bottom-[0.21px] content-stretch flex flex-col items-start left-0 pt-[20px] right-0" data-name="Container">
      <OverlayOverlayBlur />
    </div>
  );
}

function Background25() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_607.83px] right-[-0.01px] rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground4}')` }}>
      <MotionElement40 />
      <Container238 />
    </div>
  );
}

function MaskGroup45() {
  return (
    <div className="h-[607.83px] relative shrink-0 w-full" data-name="Mask Group">
      <Background25 />
    </div>
  );
}

function Container237() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <MaskGroup45 />
    </div>
  );
}

function Container236() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container237 />
    </div>
  );
}

function Svg58() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455.88 607.832">
        <g id="Frame">
          <path d={svgPaths.p39294600} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pb94d500} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p149c5a00} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Picture1() {
  return (
    <div className="h-[607.83px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg58 />
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 opacity-40 to-[rgba(0,0,0,0.7)]" data-name="Gradient" />
    </div>
  );
}

function MotionElement41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture1 />
    </div>
  );
}

function Svg59() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Frame">
          <path d={svgPaths.pfcd000} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p320ec900} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p27906b00} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p197faa70} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container249() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Svg59 />
    </div>
  );
}

function Container248() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[50px_50px] rounded-[6px] top-1/2 w-[50px]" data-name="Container" style={{ maskImage: `url('${imgContainer3}')` }}>
      <Container249 />
    </div>
  );
}

function MaskGroup48() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Mask Group">
      <Container248 />
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-white w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-white w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container252() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container253 />
    </div>
  );
}

function Container250() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.3px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container251 />
      <Container252 />
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="backdrop-blur-[35px] bg-[rgba(255,255,255,0.1)] relative shrink-0 w-full" data-name="Overlay+OverlayBlur">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <MaskGroup48 />
          <Container250 />
        </div>
      </div>
    </div>
  );
}

function Container247() {
  return (
    <div className="absolute bottom-[0.21px] content-stretch flex flex-col items-start left-0 pt-[20px] right-0" data-name="Container">
      <OverlayOverlayBlur1 />
    </div>
  );
}

function Background26() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_607.83px] right-[-0.01px] rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground4}')` }}>
      <MotionElement41 />
      <Container247 />
    </div>
  );
}

function MaskGroup47() {
  return (
    <div className="h-[607.83px] relative shrink-0 w-full" data-name="Mask Group">
      <Background26 />
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <MaskGroup47 />
    </div>
  );
}

function Container245() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container246 />
    </div>
  );
}

function TabpanelGridList() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Tabpanel → grid-list">
      <Container236 />
      <Container245 />
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[919.75px]" data-name="Container">
      <TabpanelGridList />
    </div>
  );
}

function TabsComponent() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="tabs-component">
      <Margin11 />
      <Container235 />
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[252.5px] py-[60px] relative w-full">
        <TabsComponent />
      </div>
    </div>
  );
}

function Heading2MotionElement5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[42px] whitespace-pre-wrap">Clients Love Us</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading2MotionElement5 />
    </div>
  );
}

function Svg60() {
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

function ButtonPreviousSlide3() {
  return (
    <div className="bg-[#e8ded4] opacity-50 relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Previous slide">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg60 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Svg61() {
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

function ButtonNextSlide3() {
  return (
    <div className="bg-[#e8ded4] relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Next slide">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg61 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function MotionElement42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="motion-element">
      <ButtonPreviousSlide3 />
      <ButtonNextSlide3 />
    </div>
  );
}

function Container255() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container256 />
      <MotionElement42 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Melissa H.</p>
      </div>
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[13.5px] whitespace-nowrap">
        <p className="leading-[22px]">Verified Buyer</p>
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <Heading26 />
      <Container262 />
    </div>
  );
}

function Container260() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container261 />
    </div>
  );
}

function Container263() {
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

function Container259() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container260 />
      <Container263 />
    </div>
  );
}

function Svg62() {
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

function MotionElement43() {
  return (
    <div className="h-[152.01px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg62 />
    </div>
  );
}

function Overlay7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_152.01px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay2}')` }}>
      <MotionElement43 />
    </div>
  );
}

function MaskGroup50() {
  return (
    <div className="relative shrink-0 size-[152.01px]" data-name="Mask Group">
      <Overlay7 />
    </div>
  );
}

function Container258() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container259 />
      <MaskGroup50 />
    </div>
  );
}

function Background27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground5}')` }}>
      <Container258 />
    </div>
  );
}

function MaskGroup49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background27 />
    </div>
  );
}

function Group5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 1 / 6">
      <MaskGroup49 />
    </div>
  );
}

function Group16Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 1 / 6:margin">
      <Group5 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Cindy L.</p>
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[13.5px] whitespace-nowrap">
        <p className="leading-[22px]">Verified Buyer</p>
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_7.99px] items-center relative shrink-0" data-name="Container">
      <Heading27 />
      <Container268 />
    </div>
  );
}

function Container266() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container267 />
    </div>
  );
}

function Container269() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">“The denim is strong and of high</p>
        <p>quality, with just a bit of stretch.”</p>
      </div>
    </div>
  );
}

function Container265() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container266 />
      <Container269 />
    </div>
  );
}

function Svg63() {
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

function MotionElement44() {
  return (
    <div className="h-[152.01px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg63 />
    </div>
  );
}

function Overlay8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_152.01px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay2}')` }}>
      <MotionElement44 />
    </div>
  );
}

function MaskGroup52() {
  return (
    <div className="relative shrink-0 size-[152.01px]" data-name="Mask Group">
      <Overlay8 />
    </div>
  );
}

function Container264() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container265 />
      <MaskGroup52 />
    </div>
  );
}

function Background28() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground5}')` }}>
      <Container264 />
    </div>
  );
}

function MaskGroup51() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background28 />
    </div>
  );
}

function Group12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 2 / 6">
      <MaskGroup51 />
    </div>
  );
}

function Group26Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 2 / 6:margin">
      <Group12 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Wilson J.</p>
      </div>
    </div>
  );
}

function Container274() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[13.5px] whitespace-nowrap">
        <p className="leading-[22px]">Verified Buyer</p>
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <Heading28 />
      <Container274 />
    </div>
  );
}

function Container272() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container273 />
    </div>
  );
}

function Container275() {
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

function Container271() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container272 />
      <Container275 />
    </div>
  );
}

function Svg64() {
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

function MotionElement45() {
  return (
    <div className="h-[152.01px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg64 />
    </div>
  );
}

function Overlay9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_152.01px] right-0 rounded-[10px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay2}')` }}>
      <MotionElement45 />
    </div>
  );
}

function MaskGroup54() {
  return (
    <div className="relative shrink-0 size-[152.01px]" data-name="Mask Group">
      <Overlay9 />
    </div>
  );
}

function Container270() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container271 />
      <MaskGroup54 />
    </div>
  );
}

function Background29() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground5}')` }}>
      <Container270 />
    </div>
  );
}

function MaskGroup53() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background29 />
    </div>
  );
}

function Group19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 3 / 6">
      <MaskGroup53 />
    </div>
  );
}

function Group36Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 3 / 6:margin">
      <Group19 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Samantha T.</p>
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[13.5px] whitespace-nowrap">
        <p className="leading-[22px]">Verified Buyer</p>
      </div>
    </div>
  );
}

function Container279() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8.01px] items-center relative shrink-0" data-name="Container">
      <Heading29 />
      <Container280 />
    </div>
  );
}

function Container278() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container279 />
    </div>
  );
}

function Container281() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">{`"This shirt is among the top in my`}</p>
        <p>{`collection. It fits excellently."`}</p>
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container278 />
      <Container281 />
    </div>
  );
}

function Overlay10() {
  return <div className="bg-[rgba(0,0,0,0.03)] rounded-[10px] shrink-0 size-[152.01px]" data-name="Overlay" />;
}

function Container276() {
  return (
    <div className="content-stretch flex gap-[12.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container277 />
      <Overlay10 />
    </div>
  );
}

function Background30() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground5}')` }}>
      <Container276 />
    </div>
  );
}

function MaskGroup55() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background30 />
    </div>
  );
}

function Group23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 4 / 6">
      <MaskGroup55 />
    </div>
  );
}

function Group46Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 4 / 6:margin">
      <Group23 />
    </div>
  );
}

function Container285() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <div className="h-[28px] shrink-0 w-[99.04px]" data-name="Heading 3" />
      <div className="h-[22px] shrink-0 w-[94.58px]" data-name="Rectangle" />
    </div>
  );
}

function Container284() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container285 />
    </div>
  );
}

function Container283() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container284 />
    </div>
  );
}

function Overlay11() {
  return <div className="bg-[rgba(0,0,0,0.03)] rounded-[10px] shrink-0 size-[152.01px]" data-name="Overlay" />;
}

function Container282() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container283 />
      <Overlay11 />
    </div>
  );
}

function Background31() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground5}')` }}>
      <Container282 />
    </div>
  );
}

function MaskGroup56() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background31 />
    </div>
  );
}

function Group26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 5 / 6">
      <MaskGroup56 />
    </div>
  );
}

function Group56Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 5 / 6:margin">
      <Group26 />
    </div>
  );
}

function Container289() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <div className="h-[28px] shrink-0 w-[58.61px]" data-name="Heading 3" />
      <div className="h-[22px] shrink-0 w-[94.58px]" data-name="Rectangle" />
    </div>
  );
}

function Container288() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container289 />
    </div>
  );
}

function Container287() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[270.31px]" data-name="Container">
      <Container288 />
    </div>
  );
}

function Overlay12() {
  return <div className="bg-[rgba(0,0,0,0.03)] rounded-[10px] shrink-0 size-[152.01px]" data-name="Overlay" />;
}

function Container286() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container287 />
      <Overlay12 />
    </div>
  );
}

function Background32() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] px-[16px] py-[20px] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground5}')` }}>
      <Container286 />
    </div>
  );
}

function MaskGroup57() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mask Group">
      <Background32 />
    </div>
  );
}

function Group29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[466.33px]" data-name="Group - 6 / 6">
      <MaskGroup57 />
    </div>
  );
}

function Group66Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative self-stretch shrink-0 w-[474.33px]" data-name="Group - 6 / 6:margin">
      <Group29 />
    </div>
  );
}

function Container257() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[2845.96px]" data-name="Container">
      <Group16Margin1 />
      <Group26Margin1 />
      <Group36Margin1 />
      <Group46Margin1 />
      <Group56Margin1 />
      <Group66Margin1 />
    </div>
  );
}

function TestimonialsComponent() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="testimonials-component">
      <Container257 />
    </div>
  );
}

function Container254() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[252.5px] relative w-full">
        <Container255 />
        <TestimonialsComponent />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#e8ded4] content-stretch flex flex-col items-start overflow-clip py-[60px] relative shrink-0 w-full" data-name="Section">
      <Container254 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute inset-[0_0_-0.24px_-0.24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 682.5 682.5">
        <g id="Frame">
          <path d={svgPaths.p29d2e200} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p28134b30} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pccb0330} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg65() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.12px] overflow-clip" data-name="SVG">
      <Frame35 />
    </div>
  );
}

function MotionElementPicture8() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg65 />
      <div className="absolute bg-black inset-0 opacity-20" data-name="Background" />
    </div>
  );
}

function MotionElement46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-center text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">Trending Now</p>
      </div>
    </div>
  );
}

function MotionElement47() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[400px] relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[65px] relative shrink-0 text-[52px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Plush Cotton</p>
        <p>Sweaters</p>
      </div>
    </div>
  );
}

function Container295() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop Collection</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[48px] max-w-[400px] opacity-50 relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container295 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElement48() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="motion-element">
      <Button4 />
    </div>
  );
}

function Container294() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[400px] relative shrink-0" data-name="Container">
      <MotionElement46 />
      <MotionElement47 />
      <MotionElement48 />
    </div>
  );
}

function Container293() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center p-[40px]" data-name="Container">
      <Container294 />
    </div>
  );
}

function Background34() {
  return (
    <div className="absolute bg-black h-[682.5px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_682.5px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground6}')` }}>
      <MotionElementPicture8 />
      <Container293 />
    </div>
  );
}

function MaskGroup58() {
  return (
    <div className="h-[682.5px] relative shrink-0 w-full" data-name="Mask Group">
      <Background34 />
    </div>
  );
}

function Container292() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px sticky top-0" data-name="Container">
      <MaskGroup58 />
    </div>
  );
}

function Container291() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[25px] relative size-full">
          <Container292 />
        </div>
      </div>
    </div>
  );
}

function Heading30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 2">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[42px] whitespace-pre-wrap">{`Collection's name`}</p>
      </div>
    </div>
  );
}

function Svg66() {
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

function ButtonPreviousSlide4() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Previous slide">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg66 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Svg67() {
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

function ButtonNextSlide4() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Next slide">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg67 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container299() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <ButtonPreviousSlide4 />
      <ButtonNextSlide4 />
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container299 />
    </div>
  );
}

function MotionElement49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="motion-element">
      <Heading30 />
      <Container298 />
    </div>
  );
}

function Container303() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container302() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container303 />
    </div>
  );
}

function Container301() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container302 />
    </div>
  );
}

function Group45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 10 / 12">
      <Container301 />
    </div>
  );
}

function Group1012Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 10 / 12:margin">
      <Group45 />
    </div>
  );
}

function Container306() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container305() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container306 />
    </div>
  );
}

function Container304() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container305 />
    </div>
  );
}

function Group47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 11 / 12">
      <Container304 />
    </div>
  );
}

function Group1112Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 11 / 12:margin">
      <Group47 />
    </div>
  );
}

function Container309() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container308() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container309 />
    </div>
  );
}

function Container307() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container308 />
    </div>
  );
}

function Group49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.67px]" data-name="Group - 12 / 12">
      <Container307 />
    </div>
  );
}

function Group1212Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.67px]" data-name="Group - 12 / 12:margin">
      <Group49 />
    </div>
  );
}

function Svg68() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207.66 207.66">
        <g id="Frame">
          <path d={svgPaths.p30f69ac0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p101e5a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p24f6db00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p14343d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container311() {
  return (
    <div className="h-[207.66px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg68 />
    </div>
  );
}

function Heading31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container314() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container313() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container314 />
    </div>
  );
}

function Container312() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading31 />
      <Container313 />
    </div>
  );
}

function Container310() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container311 />
      <Container312 />
    </div>
  );
}

function Group33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[207.66px]" data-name="Group - 1 / 12">
      <Container310 />
    </div>
  );
}

function Group112Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 1 / 12:margin">
      <Group33 />
    </div>
  );
}

function Svg69() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207.66 207.66">
        <g id="Frame">
          <path d={svgPaths.p30f69ac0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p101e5a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p24f6db00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p14343d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container316() {
  return (
    <div className="h-[207.66px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg69 />
    </div>
  );
}

function Heading32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container319() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container318() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container319 />
    </div>
  );
}

function Container317() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading32 />
      <Container318 />
    </div>
  );
}

function Container315() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container316 />
      <Container317 />
    </div>
  );
}

function Group35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[207.66px]" data-name="Group - 2 / 12">
      <Container315 />
    </div>
  );
}

function Group212Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 2 / 12:margin">
      <Group35 />
    </div>
  );
}

function Svg70() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207.66 207.66">
        <g id="Frame">
          <path d={svgPaths.p30f69ac0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p101e5a00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p24f6db00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p14343d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container321() {
  return (
    <div className="h-[207.66px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg70 />
    </div>
  );
}

function Heading33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container324() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container323() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container324 />
    </div>
  );
}

function Container322() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading33 />
      <Container323 />
    </div>
  );
}

function Container320() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container321 />
      <Container322 />
    </div>
  );
}

function Group37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[207.66px]" data-name="Group - 3 / 12">
      <Container320 />
    </div>
  );
}

function Group312Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 3 / 12:margin">
      <Group37 />
    </div>
  );
}

function Container327() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container326() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container327 />
    </div>
  );
}

function Container325() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container326 />
    </div>
  );
}

function Group39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.67px]" data-name="Group - 4 / 12">
      <Container325 />
    </div>
  );
}

function Group412Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.67px]" data-name="Group - 4 / 12:margin">
      <Group39 />
    </div>
  );
}

function Container330() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container329() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container330 />
    </div>
  );
}

function Container328() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container329 />
    </div>
  );
}

function Group40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 5 / 12">
      <Container328 />
    </div>
  );
}

function Group512Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 5 / 12:margin">
      <Group40 />
    </div>
  );
}

function Container333() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container332() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container333 />
    </div>
  );
}

function Container331() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container332 />
    </div>
  );
}

function Group41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 6 / 12">
      <Container331 />
    </div>
  );
}

function Group612Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 6 / 12:margin">
      <Group41 />
    </div>
  );
}

function Container336() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container335() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container336 />
    </div>
  );
}

function Container334() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container335 />
    </div>
  );
}

function Group42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 7 / 12">
      <Container334 />
    </div>
  );
}

function Group712Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 7 / 12:margin">
      <Group42 />
    </div>
  );
}

function Container339() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container338() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container339 />
    </div>
  );
}

function Container337() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container338 />
    </div>
  );
}

function Group43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.67px]" data-name="Group - 8 / 12">
      <Container337 />
    </div>
  );
}

function Group812Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.67px]" data-name="Group - 8 / 12:margin">
      <Group43 />
    </div>
  );
}

function Container342() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container341() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container342 />
    </div>
  );
}

function Container340() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container341 />
    </div>
  );
}

function Group44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 9 / 12">
      <Container340 />
    </div>
  );
}

function Group912Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 9 / 12:margin">
      <Group44 />
    </div>
  );
}

function Container345() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container344() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container345 />
    </div>
  );
}

function Container343() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container344 />
    </div>
  );
}

function Group46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 10 / 12">
      <Container343 />
    </div>
  );
}

function Group1012Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 10 / 12:margin">
      <Group46 />
    </div>
  );
}

function Container348() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container347() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container348 />
    </div>
  );
}

function Container346() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container347 />
    </div>
  );
}

function Group48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 11 / 12">
      <Container346 />
    </div>
  );
}

function Group1112Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 11 / 12:margin">
      <Group48 />
    </div>
  );
}

function Container351() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container350() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container351 />
    </div>
  );
}

function Container349() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container350 />
    </div>
  );
}

function Group50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.67px]" data-name="Group - 12 / 12">
      <Container349 />
    </div>
  );
}

function Group1212Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.67px]" data-name="Group - 12 / 12:margin">
      <Group50 />
    </div>
  );
}

function Container354() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container353() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container354 />
    </div>
  );
}

function Container352() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container353 />
    </div>
  );
}

function Group34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 1 / 12">
      <Container352 />
    </div>
  );
}

function Group112Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 1 / 12:margin">
      <Group34 />
    </div>
  );
}

function Container357() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container356() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container357 />
    </div>
  );
}

function Container355() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container356 />
    </div>
  );
}

function Group36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 2 / 12">
      <Container355 />
    </div>
  );
}

function Group212Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 2 / 12:margin">
      <Group36 />
    </div>
  );
}

function Container360() {
  return <div className="h-[22.5px] shrink-0 w-[48.65px]" data-name="Container" />;
}

function Container359() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container360 />
    </div>
  );
}

function Container358() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[24px] shrink-0 w-full" data-name="Heading 3" />
      <Container359 />
    </div>
  );
}

function Group38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[207.66px] relative w-[207.66px]" data-name="Group - 3 / 12">
      <Container358 />
    </div>
  );
}

function Group312Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[30px] relative self-stretch shrink-0 w-[237.66px]" data-name="Group - 3 / 12:margin">
      <Group38 />
    </div>
  );
}

function Container300() {
  return (
    <div className="absolute content-stretch flex inset-[0_-2890.42px_0_-705px] items-start" data-name="Container">
      <Group1012Margin />
      <Group1112Margin />
      <Group1212Margin />
      <Group112Margin />
      <Group212Margin />
      <Group312Margin />
      <Group412Margin />
      <Group512Margin />
      <Group612Margin />
      <Group712Margin />
      <Group812Margin />
      <Group912Margin />
      <Group1012Margin1 />
      <Group1112Margin1 />
      <Group1212Margin1 />
      <Group112Margin1 />
      <Group212Margin1 />
      <Group312Margin1 />
    </div>
  );
}

function GridList() {
  return (
    <div className="h-[278.16px] overflow-clip relative shrink-0 w-full" data-name="grid-list">
      <Container300 />
    </div>
  );
}

function CollectionItemSlider() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="collection-item-slider">
      <MotionElement49 />
      <GridList />
    </div>
  );
}

function Container297() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px sticky top-0" data-name="Container">
      <CollectionItemSlider />
    </div>
  );
}

function Container296() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[25px] relative size-full">
          <Container297 />
        </div>
      </div>
    </div>
  );
}

function Container290() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="Container">
      <Container291 />
      <Container296 />
    </div>
  );
}

function Background33() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[227.5px] py-[60px] relative w-full">
        <Container290 />
      </div>
    </div>
  );
}

function Heading2MotionElement6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">The Cult Favorite</p>
      </div>
    </div>
  );
}

function Container363() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading2MotionElement6 />
    </div>
  );
}

function Container362() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container363 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451.61 602.15">
        <g id="Frame">
          <path d={svgPaths.p3f3b8780} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1c6e7340} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1d741180} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg71() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame36 />
    </div>
  );
}

function MotionElement50() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col inset-0 items-center justify-center overflow-clip" data-name="motion-element">
      <Svg71 />
    </div>
  );
}

function Container367() {
  return (
    <div className="absolute inset-[0_0.06px_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer4}')` }}>
      <MotionElement50 />
    </div>
  );
}

function MaskGroup59() {
  return (
    <div className="h-[602.15px] relative shrink-0 w-full" data-name="Mask Group">
      <Container367 />
    </div>
  );
}

function Svg72() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3564)" id="SVG">
          <path d={svgPaths.p1d626180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p36c20180} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_3564">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container368() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Container">
      <Svg72 />
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">2</p>
      </div>
    </div>
  );
}

function ButtonMenuViewProductList() {
  return (
    <div className="absolute bg-white bottom-[19.99px] content-stretch flex h-[48px] items-center justify-center max-w-[1920px] overflow-clip px-[12px] right-[19.91px] rounded-[100px]" data-name="Button menu - View product list">
      <Container368 />
    </div>
  );
}

function Heading34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14.4px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[22.4px] whitespace-pre-wrap">Shop this look</p>
        </div>
      </div>
    </div>
  );
}

function Svg73() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12.5 3.42331L3.5 12.5696" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.5 12.5696L3.5 3.42331" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonClose() {
  return (
    <div className="-translate-y-1/2 absolute right-[12.8px] rounded-[8px] size-[16px] top-[calc(50%-0.32px)]" data-name="Button - Close">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg73 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="min-h-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[10.24px] pl-[12.8px] pr-[24px] pt-[9.6px] relative w-full">
        <Heading34 />
        <ButtonClose />
      </div>
    </div>
  );
}

function Svg74() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Frame">
          <path d={svgPaths.p1a171f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p624ab00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3d14f400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.peca5b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Overlay13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] h-[60px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_60px] right-0 rounded-[6px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay3}')` }}>
      <Svg74 />
    </div>
  );
}

function MaskGroup60() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay13 />
    </div>
  );
}

function Container371() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Container">
      <MaskGroup60 />
    </div>
  );
}

function Heading35() {
  return (
    <div className="h-[19.2px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[12px] text-black top-[9.27px] w-[136.956px]">
        <p className="leading-[19.2px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container375() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container374() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container375 />
    </div>
  );
}

function Container373() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.56px] pt-[0.64px] relative shrink-0 w-full" data-name="Container">
      <Container374 />
    </div>
  );
}

function Container372() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading35 />
      <Container373 />
    </div>
  );
}

function Container370() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center p-[12.8px] relative w-full">
          <Container371 />
          <Container372 />
        </div>
      </div>
    </div>
  );
}

function Svg75() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Frame">
          <path d={svgPaths.p20029f80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p37584300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1a89800} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Overlay14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] h-[60px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_60px] right-0 rounded-[6px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay3}')` }}>
      <Svg75 />
    </div>
  );
}

function MaskGroup61() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay14 />
    </div>
  );
}

function Container376() {
  return (
    <div className="relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <MaskGroup61 />
      </div>
    </div>
  );
}

function Heading36() {
  return (
    <div className="h-[19.2px] mb-[-0.01px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[12px] text-black top-[9.27px] w-[136.956px]">
        <p className="leading-[19.2px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container380() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container379() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container380 />
    </div>
  );
}

function Container378() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[0.56px] pt-[0.64px] relative shrink-0 w-full" data-name="Container">
      <Container379 />
    </div>
  );
}

function Container377() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.01px] relative w-full">
        <Heading36 />
        <Container378 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center pt-[13.44px] px-[12.8px] relative w-full">
          <Container376 />
          <Container377 />
        </div>
      </div>
    </div>
  );
}

function Container369() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Container">
      <Container370 />
      <HorizontalBorder1 />
    </div>
  );
}

function Background36() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start max-h-[481.7200012207031px] max-w-[361.2879943847656px] opacity-0 overflow-clip pb-[12.8px] relative rounded-[10px] shrink-0 w-[300px]" data-name="Background">
      <HorizontalBorder />
      <Container369 />
    </div>
  );
}

function LookbookCard() {
  return (
    <div className="absolute content-stretch flex inset-[0_0.06px_0_0] items-end justify-end pb-[56.75px] pl-[84.11px] pr-[67.5px] pt-[331.32px]" data-name="lookbook-card">
      <Background36 />
    </div>
  );
}

function LookbookCardWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="lookbook-card-wrapper">
      <MaskGroup59 />
      <ButtonMenuViewProductList />
      <LookbookCard />
    </div>
  );
}

function Container366() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <LookbookCardWrapper />
    </div>
  );
}

function Container365() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container366 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute inset-[0_0_-0.16px_-0.21px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451.61 602.147">
        <g id="Frame">
          <path d={svgPaths.p179afb00} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p3ebdf880} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1100f900} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg76() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.07px_-0.11px_-0.09px_-0.1px] overflow-clip" data-name="SVG">
      <Frame37 />
    </div>
  );
}

function MotionElementPicture9() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg76 />
      <div className="absolute bg-black inset-0 opacity-30" data-name="Background" />
    </div>
  );
}

function Container385() {
  return (
    <div className="content-stretch flex items-start justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[99px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-center text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">Exclusion Apply</p>
      </div>
    </div>
  );
}

function MotionElement51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="motion-element">
      <Container385 />
    </div>
  );
}

function MotionElementMargin17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[16px] relative" data-name="motion-element:margin">
      <MotionElement51 />
    </div>
  );
}

function MotionElement52() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[320px] px-[44.05px] relative shrink-0" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[48px] relative shrink-0 text-[40px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">30% OFF</p>
        <p>Accessories</p>
      </div>
    </div>
  );
}

function Container386() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="mb-0">Linen is breathable, antimicrobial, heat-</p>
        <p>regulating, and long-lasting.</p>
      </div>
    </div>
  );
}

function MotionElement53() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] min-w-[320px] relative shrink-0" data-name="motion-element">
      <Container386 />
    </div>
  );
}

function MotionElementMargin18() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[16px] relative shrink-0" data-name="motion-element:margin">
      <MotionElement53 />
    </div>
  );
}

function Container387() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
          <p className="leading-[30px]">Shop Accessories</p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[48px] opacity-50 relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container387 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElement54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative" data-name="motion-element">
      <Button5 />
    </div>
  );
}

function MotionElementMargin19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pt-[16px] relative" data-name="motion-element:margin">
      <MotionElement54 />
    </div>
  );
}

function Container384() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElementMargin17 />
      <MotionElement52 />
      <MotionElementMargin18 />
      <MotionElementMargin19 />
    </div>
  );
}

function Container383() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[32px]" data-name="Container">
      <Container384 />
    </div>
  );
}

function Background37() {
  return (
    <div className="absolute bg-black h-[602.15px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_602.15px] right-[0.06px] rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgContainer4}')` }}>
      <MotionElementPicture9 />
      <Container383 />
    </div>
  );
}

function MaskGroup62() {
  return (
    <div className="h-[602.15px] relative shrink-0 w-full" data-name="Mask Group">
      <Background37 />
    </div>
  );
}

function Container382() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <MaskGroup62 />
    </div>
  );
}

function Container381() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container382 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451.61 602.15">
        <g id="Frame">
          <path d={svgPaths.p3f3b8780} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p1c6e7340} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1d741180} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Svg77() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Frame38 />
    </div>
  );
}

function MotionElement55() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col inset-0 items-center justify-center overflow-clip" data-name="motion-element">
      <Svg77 />
    </div>
  );
}

function Container390() {
  return (
    <div className="absolute inset-[0_0.06px_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] rounded-[10px]" data-name="Container" style={{ maskImage: `url('${imgContainer4}')` }}>
      <MotionElement55 />
    </div>
  );
}

function MaskGroup63() {
  return (
    <div className="h-[602.15px] relative shrink-0 w-full" data-name="Mask Group">
      <Container390 />
    </div>
  );
}

function Svg78() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3564)" id="SVG">
          <path d={svgPaths.p1d626180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p36c20180} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_3564">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container391() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Container">
      <Svg78 />
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">2</p>
      </div>
    </div>
  );
}

function ButtonMenuViewProductList1() {
  return (
    <div className="absolute bg-white bottom-[19.99px] content-stretch flex h-[48px] items-center justify-center max-w-[1920px] overflow-clip px-[12px] right-[19.9px] rounded-[100px]" data-name="Button menu - View product list">
      <Container391 />
    </div>
  );
}

function Heading37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14.4px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[22.4px] whitespace-pre-wrap">The Cult Favorite</p>
        </div>
      </div>
    </div>
  );
}

function Svg79() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12.5 3.42331L3.5 12.5696" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.5 12.5696L3.5 3.42331" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonClose1() {
  return (
    <div className="-translate-y-1/2 absolute right-[12.8px] rounded-[8px] size-[16px] top-[calc(50%-0.32px)]" data-name="Button - Close">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg79 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="min-h-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[10.24px] pl-[12.8px] pr-[24px] pt-[9.6px] relative w-full">
        <Heading37 />
        <ButtonClose1 />
      </div>
    </div>
  );
}

function Svg80() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Frame">
          <path d={svgPaths.p1a171f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p624ab00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3d14f400} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.peca5b80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Overlay15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] h-[60px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_60px] right-0 rounded-[6px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay3}')` }}>
      <Svg80 />
    </div>
  );
}

function MaskGroup64() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay15 />
    </div>
  );
}

function Container394() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Container">
      <MaskGroup64 />
    </div>
  );
}

function Heading38() {
  return (
    <div className="h-[19.2px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[12px] text-black top-[9.27px] w-[136.956px]">
        <p className="leading-[19.2px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container398() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container397() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container398 />
    </div>
  );
}

function Container396() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.56px] pt-[0.64px] relative shrink-0 w-full" data-name="Container">
      <Container397 />
    </div>
  );
}

function Container395() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading38 />
      <Container396 />
    </div>
  );
}

function Container393() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center p-[12.8px] relative w-full">
          <Container394 />
          <Container395 />
        </div>
      </div>
    </div>
  );
}

function Svg81() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Frame">
          <path d={svgPaths.p20029f80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p37584300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p1a89800} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Overlay16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] h-[60px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_60px] right-0 rounded-[6px] top-0" data-name="Overlay" style={{ maskImage: `url('${imgOverlay3}')` }}>
      <Svg81 />
    </div>
  );
}

function MaskGroup65() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Mask Group">
      <Overlay16 />
    </div>
  );
}

function Container399() {
  return (
    <div className="relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <MaskGroup65 />
      </div>
    </div>
  );
}

function Heading39() {
  return (
    <div className="h-[19.2px] mb-[-0.01px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[12px] text-black top-[9.27px] w-[136.956px]">
        <p className="leading-[19.2px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container403() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container402() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container403 />
    </div>
  );
}

function Container401() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[0.56px] pt-[0.64px] relative shrink-0 w-full" data-name="Container">
      <Container402 />
    </div>
  );
}

function Container400() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.01px] relative w-full">
        <Heading39 />
        <Container401 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center pt-[13.44px] px-[12.8px] relative w-full">
          <Container399 />
          <Container400 />
        </div>
      </div>
    </div>
  );
}

function Container392() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Container">
      <Container393 />
      <HorizontalBorder3 />
    </div>
  );
}

function Background38() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start max-h-[481.7200012207031px] max-w-[361.2879943847656px] opacity-0 overflow-clip pb-[12.8px] relative rounded-[10px] shrink-0 w-[300px]" data-name="Background">
      <HorizontalBorder2 />
      <Container392 />
    </div>
  );
}

function LookbookCard1() {
  return (
    <div className="absolute content-stretch flex inset-[0_0.06px_0_0] items-end justify-end pb-[56.75px] pl-[84.12px] pr-[67.49px] pt-[331.32px]" data-name="lookbook-card">
      <Background38 />
    </div>
  );
}

function LookbookCardWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="lookbook-card-wrapper">
      <MaskGroup63 />
      <ButtonMenuViewProductList1 />
      <LookbookCard1 />
    </div>
  );
}

function Container389() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <LookbookCardWrapper1 />
    </div>
  );
}

function Container388() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container389 />
        </div>
      </div>
    </div>
  );
}

function Container364() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative shrink-0 w-[1445px]" data-name="Container">
      <Container365 />
      <Container381 />
      <Container388 />
    </div>
  );
}

function Background35() {
  return (
    <div className="bg-white mb-[-0.01px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pt-[60px] px-[252.5px] relative w-full">
          <Container362 />
          <Container364 />
        </div>
      </div>
    </div>
  );
}

function Container361() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[0.8px] mb-[-0.01px] relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      </div>
      <Background35 />
    </div>
  );
}

function Heading2MotionElement7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">Explore Popular Search</p>
      </div>
    </div>
  );
}

function Container406() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading2MotionElement7 />
    </div>
  );
}

function Container405() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container406 />
    </div>
  );
}

function Container410() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Eco knit Cardigan</p>
      </div>
    </div>
  );
}

function Container409() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <Container410 />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container409 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 1 / 9">
      <Border />
    </div>
  );
}

function Group19Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 1 / 9:margin">
      <Group6 />
    </div>
  );
}

function Svg82() {
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

function Container412() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg82 />
    </div>
  );
}

function Container413() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Cashmere Sweater</p>
      </div>
    </div>
  );
}

function Container411() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container412 />
        <Container413 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container411 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 2 / 9">
      <Border1 />
    </div>
  );
}

function Group29Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 2 / 9:margin">
      <Group13 />
    </div>
  );
}

function Svg83() {
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

function Container415() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg83 />
    </div>
  );
}

function Container416() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">{`Dresses & Skirts`}</p>
      </div>
    </div>
  );
}

function Container414() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container415 />
        <Container416 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container414 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 3 / 9">
      <Border2 />
    </div>
  );
}

function Group39Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 3 / 9:margin">
      <Group20 />
    </div>
  );
}

function Svg84() {
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

function Container418() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg84 />
    </div>
  );
}

function Container419() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Cold Weather</p>
      </div>
    </div>
  );
}

function Container417() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container418 />
        <Container419 />
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container417 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 4 / 9">
      <Border3 />
    </div>
  );
}

function Group49Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 4 / 9:margin">
      <Group24 />
    </div>
  );
}

function Svg85() {
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

function Container421() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg85 />
    </div>
  );
}

function Container422() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Cold Weather</p>
      </div>
    </div>
  );
}

function Container420() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container421 />
        <Container422 />
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container420 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 5 / 9">
      <Border4 />
    </div>
  );
}

function Group59Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 5 / 9:margin">
      <Group27 />
    </div>
  );
}

function Svg86() {
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

function Container424() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg86 />
    </div>
  );
}

function Container425() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Accessories</p>
      </div>
    </div>
  );
}

function Container423() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container424 />
        <Container425 />
      </div>
    </div>
  );
}

function Border5() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container423 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 6 / 9">
      <Border5 />
    </div>
  );
}

function Group69Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 6 / 9:margin">
      <Group30 />
    </div>
  );
}

function Svg87() {
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

function Container427() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg87 />
    </div>
  );
}

function Container428() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Fleece Jackets</p>
      </div>
    </div>
  );
}

function Container426() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container427 />
        <Container428 />
      </div>
    </div>
  );
}

function Border6() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container426 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 7 / 9">
      <Border6 />
    </div>
  );
}

function Group79Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 7 / 9:margin">
      <Group31 />
    </div>
  );
}

function Svg88() {
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

function Container430() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg88 />
    </div>
  );
}

function Container429() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container430 />
        <div className="h-[30px] shrink-0 w-[51px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Border7() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container429 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 8 / 9">
      <Border7 />
    </div>
  );
}

function Group89Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 8 / 9:margin">
      <Group32 />
    </div>
  );
}

function Group99Margin() {
  return <div className="h-full shrink-0 w-[181.99px]" data-name="Group - 9 / 9:margin" />;
}

function Container408() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-[1695.08px]" data-name="Container">
      <Group19Margin />
      <Group29Margin />
      <Group39Margin />
      <Group49Margin />
      <Group59Margin />
      <Group69Margin />
      <Group79Margin />
      <Group89Margin />
      <Group99Margin />
    </div>
  );
}

function ButtonList() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative self-stretch" data-name="button-list">
      <Container408 />
      <div className="absolute bottom-0 flex items-center justify-center left-[-28px] top-0 w-[70px]">
        <div className="-scale-y-100 flex-none h-[48px] rotate-180 w-[70px]">
          <div className="opacity-0 size-full" data-name="Gradient" style={{ backgroundImage: "linear-gradient(-88.14deg, rgb(255, 255, 255) 35.56%, rgba(255, 255, 255, 0) 98.43%)" }} />
        </div>
      </div>
      <div className="absolute bottom-0 right-[-28px] top-0 w-[70px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(-88.14deg, rgb(255, 255, 255) 35.56%, rgba(255, 255, 255, 0) 98.43%)" }} />
    </div>
  );
}

function Container407() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <ButtonList />
    </div>
  );
}

function Container404() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[252.5px] relative w-full">
        <Container405 />
        <Container407 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[60px] relative shrink-0 w-full" data-name="Section">
      <Container404 />
    </div>
  );
}

function MotionElement56() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-black text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">Shop This Look</p>
      </div>
    </div>
  );
}

function Heading2MotionElement8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">Iconic Autumn Set</p>
      </div>
    </div>
  );
}

function Container434() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <MotionElement56 />
      <Heading2MotionElement8 />
    </div>
  );
}

function Container433() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container434 />
    </div>
  );
}

function Svg89() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 248">
        <g id="Frame">
          <path d={svgPaths.pe39f000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2417bc80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p26b54fc0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p32afa280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container438() {
  return (
    <div className="h-[248px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg89 />
    </div>
  );
}

function Heading40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container441() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container440() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container441 />
    </div>
  );
}

function Container439() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading40 />
      <Container440 />
    </div>
  );
}

function Container437() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container438 />
      <Container439 />
    </div>
  );
}

function Container436() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container437 />
    </div>
  );
}

function Svg90() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 248">
        <g id="Frame">
          <path d={svgPaths.pe39f000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2417bc80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p26b54fc0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p32afa280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container444() {
  return (
    <div className="h-[248px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg90 />
    </div>
  );
}

function Heading41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container447() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container446() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container447 />
    </div>
  );
}

function Container445() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading41 />
      <Container446 />
    </div>
  );
}

function Container443() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container444 />
      <Container445 />
    </div>
  );
}

function Container442() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container443 />
    </div>
  );
}

function Svg91() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 248">
        <g id="Frame">
          <path d={svgPaths.pe39f000} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p2417bc80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p26b54fc0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p32afa280} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container450() {
  return (
    <div className="h-[248px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Svg91 />
    </div>
  );
}

function Heading42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Example product title</p>
      </div>
    </div>
  );
}

function Container453() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€19,99</p>
      </div>
    </div>
  );
}

function Container452() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container453 />
    </div>
  );
}

function Container451() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading42 />
      <Container452 />
    </div>
  );
}

function Container449() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container450 />
      <Container451 />
    </div>
  );
}

function Container448() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container449 />
    </div>
  );
}

function ProductsBundleSlider() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="products-bundle-slider">
      <Container436 />
      <Container442 />
      <Container448 />
    </div>
  );
}

function Container435() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ProductsBundleSlider />
    </div>
  );
}

function Container454() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
          <p className="leading-[30px]">Add all to cart</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-black h-[48px] max-w-[760px] opacity-50 relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container454 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function MotionElement57() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="motion-element">
      <Button6 />
    </div>
  );
}

function ProductsBundle() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="products-bundle">
      <Container435 />
      <MotionElement57 />
    </div>
  );
}

function Container432() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[100px] py-[60px] relative size-full">
          <Container433 />
          <ProductsBundle />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 960">
        <g id="Frame">
          <path d={svgPaths.p2c196f00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p30202100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p17569df0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p2561fa70} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p2949c8c0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p31452580} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg92() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Frame39 />
    </div>
  );
}

function MotionElement58() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="motion-element">
      <Svg92 />
    </div>
  );
}

function Overlay17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start left-0 overflow-clip size-[960px] top-0" data-name="Overlay">
      <MotionElement58 />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-white h-[13.33px] rounded-[999px] shadow-[0px_4px_9px_0px_rgba(0,0,0,0.2)] shrink-0 w-[13.32px]" data-name="Background+Shadow" />;
}

function MotionElement59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="motion-element">
      <div className="absolute bg-[rgba(0,0,0,0.2)] left-0 rounded-[20px] size-[40px] top-0" data-name="Overlay+Border">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[26.66px] left-[6.66px] rounded-[13.33px] top-[6.66px] w-[26.67px]" data-name="Overlay" />
      <BackgroundShadow />
    </div>
  );
}

function ProductsBundleHotspot() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[358.8px] size-[40px] top-[800.4px]" data-name="products-bundle-hotspot">
      <MotionElement59 />
    </div>
  );
}

function BackgroundShadow1() {
  return <div className="bg-white h-[13.33px] rounded-[999px] shadow-[0px_4px_9px_0px_rgba(0,0,0,0.2)] shrink-0 w-[13.32px]" data-name="Background+Shadow" />;
}

function MotionElement60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="motion-element">
      <div className="absolute bg-[rgba(0,0,0,0.2)] left-0 rounded-[20px] size-[40px] top-0" data-name="Overlay+Border">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[26.66px] left-[6.66px] rounded-[13.33px] top-[6.66px] w-[26.67px]" data-name="Overlay" />
      <BackgroundShadow1 />
    </div>
  );
}

function ProductsBundleHotspot1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[533.6px] size-[40px] top-[552px]" data-name="products-bundle-hotspot">
      <MotionElement60 />
    </div>
  );
}

function BackgroundShadow2() {
  return <div className="bg-white h-[13.33px] rounded-[999px] shadow-[0px_4px_9px_0px_rgba(0,0,0,0.2)] shrink-0 w-[13.32px]" data-name="Background+Shadow" />;
}

function MotionElement61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="motion-element">
      <div className="absolute bg-[rgba(0,0,0,0.2)] left-0 rounded-[20px] size-[40px] top-0" data-name="Overlay+Border">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[26.66px] left-[6.66px] rounded-[13.33px] top-[6.66px] w-[26.67px]" data-name="Overlay" />
      <BackgroundShadow2 />
    </div>
  );
}

function ProductsBundleHotspot2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[414px] size-[40px] top-[414px]" data-name="products-bundle-hotspot">
      <MotionElement61 />
    </div>
  );
}

function Container455() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip self-stretch sticky top-0" data-name="Container">
      <Overlay17 />
      <ProductsBundleHotspot />
      <ProductsBundleHotspot1 />
      <ProductsBundleHotspot2 />
    </div>
  );
}

function Container431() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-[960px] relative shrink-0 w-full" data-name="Container">
      <Container432 />
      <Container455 />
    </div>
  );
}

function Background39() {
  return (
    <div className="bg-[#e9e9e9] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <Container431 />
    </div>
  );
}

function MotionElement62() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15.9px] text-black text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24.9px]">Shop By Brands</p>
      </div>
    </div>
  );
}

function Container458() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0" data-name="Container">
      <MotionElement62 />
    </div>
  );
}

function Container457() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container458 />
    </div>
  );
}

function Svg93() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 55.7125">
        <g id="Frame">
          <path d={svgPaths.p8807340} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pbf1f100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3e835b70} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElement63() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[55.71px] max-w-[148.32000732421875px] overflow-clip relative shrink-0 w-[130px]" data-name="motion-element">
      <Svg93 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Link">
      <MotionElement63 />
    </div>
  );
}

function Container460() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[148.32px]" data-name="Container">
      <Link1 />
    </div>
  );
}

function Svg94() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 55.7125">
        <g id="Frame">
          <path d={svgPaths.p8807340} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pbf1f100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3e835b70} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElement64() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[55.71px] max-w-[148.33999633789062px] overflow-clip relative shrink-0 w-[130px]" data-name="motion-element">
      <Svg94 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Link">
      <MotionElement64 />
    </div>
  );
}

function Container461() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[148.34px]" data-name="Container">
      <Link2 />
    </div>
  );
}

function Svg95() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 55.7125">
        <g id="Frame">
          <path d={svgPaths.p8807340} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pbf1f100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3e835b70} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElement65() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[55.71px] max-w-[148.33999633789062px] overflow-clip relative shrink-0 w-[130px]" data-name="motion-element">
      <Svg95 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Link">
      <MotionElement65 />
    </div>
  );
}

function Container462() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[148.34px]" data-name="Container">
      <Link3 />
    </div>
  );
}

function Svg96() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 55.7125">
        <g id="Frame">
          <path d={svgPaths.p8807340} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pbf1f100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3e835b70} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElement66() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[55.71px] max-w-[148.32000732421875px] overflow-clip relative shrink-0 w-[130px]" data-name="motion-element">
      <Svg96 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Link">
      <MotionElement66 />
    </div>
  );
}

function Container463() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[148.32px]" data-name="Container">
      <Link4 />
    </div>
  );
}

function Svg97() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 55.7125">
        <g id="Frame">
          <path d={svgPaths.p8807340} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pbf1f100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3e835b70} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElement67() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[55.71px] max-w-[148.33999633789062px] overflow-clip relative shrink-0 w-[130px]" data-name="motion-element">
      <Svg97 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Link">
      <MotionElement67 />
    </div>
  );
}

function Container464() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[148.34px]" data-name="Container">
      <Link5 />
    </div>
  );
}

function Svg98() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 overflow-clip" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 55.7125">
        <g id="Frame">
          <path d={svgPaths.p8807340} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.pbf1f100} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.p3e835b70} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MotionElement68() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[55.71px] max-w-[148.33999633789062px] overflow-clip relative shrink-0 w-[130px]" data-name="motion-element">
      <Svg98 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Link">
      <MotionElement68 />
    </div>
  );
}

function Container465() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[148.34px]" data-name="Container">
      <Link6 />
    </div>
  );
}

function Container459() {
  return (
    <div className="content-stretch flex gap-[50px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container460 />
      <Container461 />
      <Container462 />
      <Container463 />
      <Container464 />
      <Container465 />
    </div>
  );
}

function Container456() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] items-start max-w-[1140px] relative shrink-0 w-full" data-name="Container">
      <Container457 />
      <Container459 />
    </div>
  );
}

function Background40() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[390px] py-[60px] relative w-full">
        <Container456 />
      </div>
    </div>
  );
}

function MotionElementSvg6() {
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

function Container466() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[451.6600036621094px] relative shrink-0 w-[60px]" data-name="Container">
      <MotionElementSvg6 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[451.6600036621094px] pb-[20px] relative shrink-0 w-[60px]" data-name="Margin">
      <Container466 />
    </div>
  );
}

function Container469() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">All orders over $120 are delivered to your</p>
        <p>doorstep at no extra charge.</p>
      </div>
    </div>
  );
}

function Container468() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] min-w-[320px] relative shrink-0" data-name="Container">
      <Container469 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[12px] relative shrink-0" data-name="Margin">
      <Container468 />
    </div>
  );
}

function Container471() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Explore Now</p>
      </div>
    </div>
  );
}

function Svg99() {
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

function Container472() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg99 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <Container471 />
      <Container472 />
    </div>
  );
}

function Container470() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Link7 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0" data-name="Margin">
      <Container470 />
    </div>
  );
}

function Container467() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Free Shipping</p>
      </div>
      <Margin13 />
      <Margin14 />
    </div>
  );
}

function Background42() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative self-stretch" data-name="Background">
      <Margin12 />
      <Container467 />
    </div>
  );
}

function MotionElementSvg7() {
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

function Container473() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[451.6600036621094px] relative shrink-0 w-[60px]" data-name="Container">
      <MotionElementSvg7 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[451.6600036621094px] pb-[20px] relative shrink-0 w-[60px]" data-name="Margin">
      <Container473 />
    </div>
  );
}

function Container476() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Enjoy the freedom of stress-free shopping</p>
        <p>with our hassle-free and return policy.</p>
      </div>
    </div>
  );
}

function Container475() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0" data-name="Container">
      <Container476 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[12px] relative shrink-0" data-name="Margin">
      <Container475 />
    </div>
  );
}

function Container478() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Return Policy</p>
      </div>
    </div>
  );
}

function Svg100() {
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

function Container479() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg100 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <Container478 />
      <Container479 />
    </div>
  );
}

function Container477() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Link8 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0" data-name="Margin">
      <Container477 />
    </div>
  );
}

function Container474() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30-Days Free Returns</p>
      </div>
      <Margin16 />
      <Margin17 />
    </div>
  );
}

function Background43() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative self-stretch" data-name="Background">
      <Margin15 />
      <Container474 />
    </div>
  );
}

function MotionElementSvg8() {
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

function Container480() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[451.6600036621094px] relative shrink-0 w-[60px]" data-name="Container">
      <MotionElementSvg8 />
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[451.6600036621094px] pb-[20px] relative shrink-0 w-[60px]" data-name="Margin">
      <Container480 />
    </div>
  );
}

function Container483() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">Shop with confidence knowing your</p>
        <p>payments are secure and your information</p>
      </div>
    </div>
  );
}

function Container482() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0" data-name="Container">
      <Container483 />
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[12px] relative shrink-0" data-name="Margin">
      <Container482 />
    </div>
  );
}

function Container485() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">More About Payment</p>
      </div>
    </div>
  );
}

function Svg101() {
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

function Container486() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg101 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center justify-center opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <Container485 />
      <Container486 />
    </div>
  );
}

function Container484() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Link9 />
    </div>
  );
}

function Margin20() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0" data-name="Margin">
      <Container484 />
    </div>
  );
}

function Container481() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
      <Margin19 />
      <Margin20 />
    </div>
  );
}

function Background44() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative self-stretch" data-name="Background">
      <Margin18 />
      <Container481 />
    </div>
  );
}

function MulticolumnIcon1() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0 w-full" data-name="multicolumn-icon">
      <Background42 />
      <Background43 />
      <Background44 />
    </div>
  );
}

function Background41() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[252.5px] py-[60px] relative w-full">
        <MulticolumnIcon1 />
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <div className="h-[0.8px] relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      </div>
      <Background41 />
    </div>
  );
}

function Frame40() {
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

function Emphasis2() {
  return (
    <div className="absolute content-stretch flex items-start left-[162.95px] top-[47.6px]" data-name="Emphasis">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffe093] text-[40px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">save 15%</p>
      </div>
      <Frame40 />
    </div>
  );
}

function Heading2MotionElement9() {
  return (
    <div className="h-[96px] relative shrink-0 w-[500px]" data-name="Heading 2 → motion-element">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold h-[96px] justify-center leading-[48px] left-0 text-[40px] text-white top-[47.6px] w-[421.37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Sign up for promotion,</p>
        <p>{`offers & `}</p>
      </div>
      <Emphasis2 />
    </div>
  );
}

function Container488() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading2MotionElement9 />
    </div>
  );
}

function Container489() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.5)] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Enter your email</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[100px] self-stretch" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[15.2px] pt-[14.4px] px-[20px] relative size-full">
          <Container489 />
        </div>
      </div>
    </div>
  );
}

function Container490() {
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

function Button7() {
  return (
    <div className="bg-[#ffe093] h-[48px] max-w-[565px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container490 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffe093] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Form() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8.01px] items-start relative shrink-0 w-full" data-name="Form">
      <Input />
      <Button7 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[15px] whitespace-nowrap">
        <p className="decoration-solid leading-[24px] underline">Terms of Use</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[15px] whitespace-nowrap">
        <p className="decoration-solid leading-[24px] underline">Privacy Policy.</p>
      </div>
    </div>
  );
}

function Container491() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">{`By subscribing you agree to the `}</p>
      </div>
      <Link10 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">{` & `}</p>
      </div>
      <Link11 />
    </div>
  );
}

function MotionElement69() {
  return (
    <div className="content-stretch flex flex-col gap-[15.6px] items-start max-w-[1140px] relative shrink-0 w-[565px]" data-name="motion-element">
      <Form />
      <Container491 />
    </div>
  );
}

function Container487() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1140px] relative shrink-0 w-full" data-name="Container">
      <Container488 />
      <MotionElement69 />
    </div>
  );
}

function Section7() {
  return (
    <div className="bg-[#113534] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[390px] py-[60px] relative w-full">
        <Container487 />
      </div>
    </div>
  );
}

function Heading2MotionElement10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px] whitespace-pre-wrap">We’re on Gram</p>
      </div>
    </div>
  );
}

function Container493() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading2MotionElement10 />
    </div>
  );
}

function Container494() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">@mason.studio</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-50 pb-[2px] relative shrink-0" data-name="Link">
      <Container494 />
      <div className="absolute bg-black bottom-0 h-px left-0 right-0" data-name="Horizontal Divider" />
    </div>
  );
}

function MotionElement70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="motion-element">
      <Link12 />
    </div>
  );
}

function Container492() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[32px] px-[252.5px] relative w-full">
          <Container493 />
          <MotionElement70 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
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

function Svg102() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame41 />
    </div>
  );
}

function Picture2() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg102 />
    </div>
  );
}

function MotionElement71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture2 />
    </div>
  );
}

function Svg103() {
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

function Picture3() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg103 />
    </div>
  );
}

function MotionElement72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture3 />
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement72 />
      <Container499 />
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

function Container500() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame42 />
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

function Background46() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <MotionElement71 />
      <Container497 />
    </div>
  );
}

function MaskGroup66() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background46 />
    </div>
  );
}

function Container496() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup66 />
    </div>
  );
}

function Frame43() {
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

function Svg104() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame43 />
    </div>
  );
}

function Picture4() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg104 />
    </div>
  );
}

function MotionElement73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture4 />
    </div>
  );
}

function Svg105() {
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

function Picture5() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg105 />
    </div>
  );
}

function MotionElement74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture5 />
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement74 />
      <Container504 />
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

function Container505() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame44 />
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

function Background47() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <MotionElement73 />
      <Container502 />
    </div>
  );
}

function MaskGroup67() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background47 />
    </div>
  );
}

function Container501() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup67 />
    </div>
  );
}

function Frame45() {
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

function Svg106() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame45 />
    </div>
  );
}

function Picture6() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg106 />
    </div>
  );
}

function MotionElement75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture6 />
    </div>
  );
}

function Svg107() {
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

function Picture7() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg107 />
    </div>
  );
}

function MotionElement76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture7 />
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement76 />
      <Container509 />
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

function Container510() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame46 />
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

function Background48() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <MotionElement75 />
      <Container507 />
    </div>
  );
}

function MaskGroup68() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background48 />
    </div>
  );
}

function Container506() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup68 />
    </div>
  );
}

function Frame47() {
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

function Svg108() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame47 />
    </div>
  );
}

function Picture8() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg108 />
    </div>
  );
}

function MotionElement77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture8 />
    </div>
  );
}

function Svg109() {
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

function Picture9() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg109 />
    </div>
  );
}

function MotionElement78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture9 />
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement78 />
      <Container514 />
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

function Container515() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame48 />
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

function Background49() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <MotionElement77 />
      <Container512 />
    </div>
  );
}

function MaskGroup69() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background49 />
    </div>
  );
}

function Container511() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup69 />
    </div>
  );
}

function Frame49() {
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

function Svg110() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame49 />
    </div>
  );
}

function Picture10() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg110 />
    </div>
  );
}

function MotionElement79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture10 />
    </div>
  );
}

function Svg111() {
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

function Picture11() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[40px] overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Picture">
      <Svg111 />
    </div>
  );
}

function MotionElement80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="motion-element">
      <Picture11 />
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <MotionElement80 />
      <Container519 />
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

function Container520() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame50 />
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

function Background50() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <MotionElement79 />
      <Container517 />
    </div>
  );
}

function MaskGroup70() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background50 />
    </div>
  );
}

function Container516() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup70 />
    </div>
  );
}

function Frame51() {
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

function Svg112() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] inset-[-0.07px_-0.07px_-0.06px_-0.06px] overflow-clip" data-name="SVG">
      <Frame51 />
    </div>
  );
}

function Picture12() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[384px] overflow-clip relative shrink-0 w-full" data-name="Picture">
      <Svg112 />
    </div>
  );
}

function MotionElement81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="motion-element">
      <Picture12 />
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

function Container525() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame52 />
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

function Background51() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <MotionElement81 />
      <Container522 />
    </div>
  );
}

function MaskGroup71() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background51 />
    </div>
  );
}

function Container521() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup71 />
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

function Container530() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame53 />
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

function Background52() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container527 />
    </div>
  );
}

function MaskGroup72() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background52 />
    </div>
  );
}

function Container526() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup72 />
    </div>
  );
}

function Container495() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-0 top-0" data-name="Container">
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
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container535 />
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

function Container536() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame54 />
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

function Background53() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container533 />
    </div>
  );
}

function MaskGroup73() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background53 />
    </div>
  );
}

function Container532() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup73 />
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
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container540 />
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

function Container541() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame55 />
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

function Background54() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container538 />
    </div>
  );
}

function MaskGroup74() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background54 />
    </div>
  );
}

function Container537() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup74 />
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

function Container546() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame56 />
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

function Background55() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container543 />
    </div>
  );
}

function MaskGroup75() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background55 />
    </div>
  );
}

function Container542() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup75 />
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

function Container551() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame57 />
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

function Background56() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container548 />
    </div>
  );
}

function MaskGroup76() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background56 />
    </div>
  );
}

function Container547() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup76 />
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

function Container556() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame58 />
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

function Background57() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container553 />
    </div>
  );
}

function MaskGroup77() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background57 />
    </div>
  );
}

function Container552() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup77 />
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

function Container561() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame59 />
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

function Background58() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container558 />
    </div>
  );
}

function MaskGroup78() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background58 />
    </div>
  );
}

function Container557() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup78 />
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

function Container566() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame60 />
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

function Background59() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container563 />
    </div>
  );
}

function MaskGroup79() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background59 />
    </div>
  );
}

function Container562() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup79 />
    </div>
  );
}

function Container531() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[2898px] top-0" data-name="Container">
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
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container571 />
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

function Container572() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame61 />
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

function Background60() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container569 />
    </div>
  );
}

function MaskGroup80() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background60 />
    </div>
  );
}

function Container568() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup80 />
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
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container576 />
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

function Container577() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame62 />
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

function Background61() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container574 />
    </div>
  );
}

function MaskGroup81() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background61 />
    </div>
  );
}

function Container573() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup81 />
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

function Container582() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame63 />
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

function Background62() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container579 />
    </div>
  );
}

function MaskGroup82() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background62 />
    </div>
  );
}

function Container578() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup82 />
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

function Container587() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame64 />
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

function Background63() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container584 />
    </div>
  );
}

function MaskGroup83() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background63 />
    </div>
  );
}

function Container583() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup83 />
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

function Container592() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame65 />
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

function Background64() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container589 />
    </div>
  );
}

function MaskGroup84() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background64 />
    </div>
  );
}

function Container588() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup84 />
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

function Container597() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame66 />
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

function Background65() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container594 />
    </div>
  );
}

function MaskGroup85() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background65 />
    </div>
  );
}

function Container593() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup85 />
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

function Container602() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame67 />
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

function Background66() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container599 />
    </div>
  );
}

function MaskGroup86() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background66 />
    </div>
  );
}

function Container598() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup86 />
    </div>
  );
}

function Container567() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[5796px] top-0" data-name="Container">
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

function Container607() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container606() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container607 />
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

function Container608() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame68 />
    </div>
  );
}

function Container605() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container606 />
          <Container608 />
        </div>
      </div>
    </div>
  );
}

function Background67() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container605 />
    </div>
  );
}

function MaskGroup87() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background67 />
    </div>
  );
}

function Container604() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup87 />
    </div>
  );
}

function Container612() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container611() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container612 />
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

function Container613() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame69 />
    </div>
  );
}

function Container610() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container611 />
          <Container613 />
        </div>
      </div>
    </div>
  );
}

function Background68() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container610 />
    </div>
  );
}

function MaskGroup88() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background68 />
    </div>
  );
}

function Container609() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup88 />
    </div>
  );
}

function Container617() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container616() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container617 />
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

function Container618() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame70 />
    </div>
  );
}

function Container615() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container616 />
          <Container618 />
        </div>
      </div>
    </div>
  );
}

function Background69() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container615 />
    </div>
  );
}

function MaskGroup89() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background69 />
    </div>
  );
}

function Container614() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup89 />
    </div>
  );
}

function Container622() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container621() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container622 />
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

function Container623() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame71 />
    </div>
  );
}

function Container620() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container621 />
          <Container623 />
        </div>
      </div>
    </div>
  );
}

function Background70() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container620 />
    </div>
  );
}

function MaskGroup90() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background70 />
    </div>
  );
}

function Container619() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup90 />
    </div>
  );
}

function Container627() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container626() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container627 />
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

function Container628() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame72 />
    </div>
  );
}

function Container625() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container626 />
          <Container628 />
        </div>
      </div>
    </div>
  );
}

function Background71() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container625 />
    </div>
  );
}

function MaskGroup91() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background71 />
    </div>
  );
}

function Container624() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup91 />
    </div>
  );
}

function Container632() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container631() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container632 />
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

function Container633() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame73 />
    </div>
  );
}

function Container630() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container631 />
          <Container633 />
        </div>
      </div>
    </div>
  );
}

function Background72() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container630 />
    </div>
  );
}

function MaskGroup92() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background72 />
    </div>
  );
}

function Container629() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup92 />
    </div>
  );
}

function Container637() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container636() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container637 />
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

function Container638() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame74 />
    </div>
  );
}

function Container635() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container636 />
          <Container638 />
        </div>
      </div>
    </div>
  );
}

function Background73() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container635 />
    </div>
  );
}

function MaskGroup93() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background73 />
    </div>
  );
}

function Container634() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup93 />
    </div>
  );
}

function Container603() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[8694px] top-0" data-name="Container">
      <Container604 />
      <Container609 />
      <Container614 />
      <Container619 />
      <Container624 />
      <Container629 />
      <Container634 />
    </div>
  );
}

function Container643() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container642() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container643 />
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

function Container644() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame75 />
    </div>
  );
}

function Container641() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container642 />
          <Container644 />
        </div>
      </div>
    </div>
  );
}

function Background74() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container641 />
    </div>
  );
}

function MaskGroup94() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background74 />
    </div>
  );
}

function Container640() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup94 />
    </div>
  );
}

function Container648() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container647() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container648 />
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

function Container649() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame76 />
    </div>
  );
}

function Container646() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container647 />
          <Container649 />
        </div>
      </div>
    </div>
  );
}

function Background75() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container646 />
    </div>
  );
}

function MaskGroup95() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background75 />
    </div>
  );
}

function Container645() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup95 />
    </div>
  );
}

function Container653() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container652() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container653 />
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

function Container654() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame77 />
    </div>
  );
}

function Container651() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container652 />
          <Container654 />
        </div>
      </div>
    </div>
  );
}

function Background76() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container651 />
    </div>
  );
}

function MaskGroup96() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background76 />
    </div>
  );
}

function Container650() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup96 />
    </div>
  );
}

function Container658() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container657() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container658 />
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

function Container659() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame78 />
    </div>
  );
}

function Container656() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container657 />
          <Container659 />
        </div>
      </div>
    </div>
  );
}

function Background77() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container656 />
    </div>
  );
}

function MaskGroup97() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background77 />
    </div>
  );
}

function Container655() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup97 />
    </div>
  );
}

function Container663() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container662() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container663 />
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

function Container664() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame79 />
    </div>
  );
}

function Container661() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container662 />
          <Container664 />
        </div>
      </div>
    </div>
  );
}

function Background78() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container661 />
    </div>
  );
}

function MaskGroup98() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background78 />
    </div>
  );
}

function Container660() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup98 />
    </div>
  );
}

function Container668() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container667() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container668 />
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

function Container669() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame80 />
    </div>
  );
}

function Container666() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container667 />
          <Container669 />
        </div>
      </div>
    </div>
  );
}

function Background79() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container666 />
    </div>
  );
}

function MaskGroup99() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background79 />
    </div>
  );
}

function Container665() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup99 />
    </div>
  );
}

function Container673() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container672() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container673 />
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

function Container674() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame81 />
    </div>
  );
}

function Container671() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container672 />
          <Container674 />
        </div>
      </div>
    </div>
  );
}

function Background80() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container671 />
    </div>
  );
}

function MaskGroup100() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background80 />
    </div>
  );
}

function Container670() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup100 />
    </div>
  );
}

function Container639() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[11592px] top-0" data-name="Container">
      <Container640 />
      <Container645 />
      <Container650 />
      <Container655 />
      <Container660 />
      <Container665 />
      <Container670 />
    </div>
  );
}

function Container679() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container678() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container679 />
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

function Container680() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame82 />
    </div>
  );
}

function Container677() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container678 />
          <Container680 />
        </div>
      </div>
    </div>
  );
}

function Background81() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container677 />
    </div>
  );
}

function MaskGroup101() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background81 />
    </div>
  );
}

function Container676() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup101 />
    </div>
  );
}

function Container684() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container683() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container684 />
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

function Container685() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame83 />
    </div>
  );
}

function Container682() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container683 />
          <Container685 />
        </div>
      </div>
    </div>
  );
}

function Background82() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container682 />
    </div>
  );
}

function MaskGroup102() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background82 />
    </div>
  );
}

function Container681() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup102 />
    </div>
  );
}

function Container689() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container688() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container689 />
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

function Container690() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame84 />
    </div>
  );
}

function Container687() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container688 />
          <Container690 />
        </div>
      </div>
    </div>
  );
}

function Background83() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container687 />
    </div>
  );
}

function MaskGroup103() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background83 />
    </div>
  );
}

function Container686() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup103 />
    </div>
  );
}

function Container694() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container693() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container694 />
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

function Container695() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame85 />
    </div>
  );
}

function Container692() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container693 />
          <Container695 />
        </div>
      </div>
    </div>
  );
}

function Background84() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container692 />
    </div>
  );
}

function MaskGroup104() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background84 />
    </div>
  );
}

function Container691() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup104 />
    </div>
  );
}

function Container699() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container698() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container699 />
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

function Container700() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame86 />
    </div>
  );
}

function Container697() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container698 />
          <Container700 />
        </div>
      </div>
    </div>
  );
}

function Background85() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container697 />
    </div>
  );
}

function MaskGroup105() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background85 />
    </div>
  );
}

function Container696() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup105 />
    </div>
  );
}

function Container704() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container703() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container704 />
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

function Container705() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame87 />
    </div>
  );
}

function Container702() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container703 />
          <Container705 />
        </div>
      </div>
    </div>
  );
}

function Background86() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container702 />
    </div>
  );
}

function MaskGroup106() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background86 />
    </div>
  );
}

function Container701() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup106 />
    </div>
  );
}

function Container709() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container708() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container709 />
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

function Container710() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame88 />
    </div>
  );
}

function Container707() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container708 />
          <Container710 />
        </div>
      </div>
    </div>
  );
}

function Background87() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container707 />
    </div>
  );
}

function MaskGroup107() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background87 />
    </div>
  );
}

function Container706() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup107 />
    </div>
  );
}

function Container675() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[14490px] top-0" data-name="Container">
      <Container676 />
      <Container681 />
      <Container686 />
      <Container691 />
      <Container696 />
      <Container701 />
      <Container706 />
    </div>
  );
}

function Container715() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container714() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container715 />
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

function Container716() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame89 />
    </div>
  );
}

function Container713() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container714 />
          <Container716 />
        </div>
      </div>
    </div>
  );
}

function Background88() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container713 />
    </div>
  );
}

function MaskGroup108() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background88 />
    </div>
  );
}

function Container712() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup108 />
    </div>
  );
}

function Container720() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container719() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container720 />
    </div>
  );
}

function Frame90() {
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

function Container721() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame90 />
    </div>
  );
}

function Container718() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container719 />
          <Container721 />
        </div>
      </div>
    </div>
  );
}

function Background89() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container718 />
    </div>
  );
}

function MaskGroup109() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background89 />
    </div>
  );
}

function Container717() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup109 />
    </div>
  );
}

function Container725() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container724() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container725 />
    </div>
  );
}

function Frame91() {
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

function Container726() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame91 />
    </div>
  );
}

function Container723() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container724 />
          <Container726 />
        </div>
      </div>
    </div>
  );
}

function Background90() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container723 />
    </div>
  );
}

function MaskGroup110() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background90 />
    </div>
  );
}

function Container722() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup110 />
    </div>
  );
}

function Container730() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container729() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container730 />
    </div>
  );
}

function Frame92() {
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

function Container731() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame92 />
    </div>
  );
}

function Container728() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container729 />
          <Container731 />
        </div>
      </div>
    </div>
  );
}

function Background91() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container728 />
    </div>
  );
}

function MaskGroup111() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background91 />
    </div>
  );
}

function Container727() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup111 />
    </div>
  );
}

function Container735() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container734() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container735 />
    </div>
  );
}

function Frame93() {
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

function Container736() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame93 />
    </div>
  );
}

function Container733() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container734 />
          <Container736 />
        </div>
      </div>
    </div>
  );
}

function Background92() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container733 />
    </div>
  );
}

function MaskGroup112() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background92 />
    </div>
  );
}

function Container732() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup112 />
    </div>
  );
}

function Container740() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container739() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container740 />
    </div>
  );
}

function Frame94() {
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

function Container741() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame94 />
    </div>
  );
}

function Container738() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container739 />
          <Container741 />
        </div>
      </div>
    </div>
  );
}

function Background93() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container738 />
    </div>
  );
}

function MaskGroup113() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background93 />
    </div>
  );
}

function Container737() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup113 />
    </div>
  );
}

function Container745() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container744() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container745 />
    </div>
  );
}

function Frame95() {
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

function Container746() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame95 />
    </div>
  );
}

function Container743() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container744 />
          <Container746 />
        </div>
      </div>
    </div>
  );
}

function Background94() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container743 />
    </div>
  );
}

function MaskGroup114() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background94 />
    </div>
  );
}

function Container742() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup114 />
    </div>
  );
}

function Container711() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[17388px] top-0" data-name="Container">
      <Container712 />
      <Container717 />
      <Container722 />
      <Container727 />
      <Container732 />
      <Container737 />
      <Container742 />
    </div>
  );
}

function Container751() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container750() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container751 />
    </div>
  );
}

function Frame96() {
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

function Container752() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame96 />
    </div>
  );
}

function Container749() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container750 />
          <Container752 />
        </div>
      </div>
    </div>
  );
}

function Background95() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container749 />
    </div>
  );
}

function MaskGroup115() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background95 />
    </div>
  );
}

function Container748() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup115 />
    </div>
  );
}

function Container756() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container755() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container756 />
    </div>
  );
}

function Frame97() {
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

function Container757() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame97 />
    </div>
  );
}

function Container754() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container755 />
          <Container757 />
        </div>
      </div>
    </div>
  );
}

function Background96() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container754 />
    </div>
  );
}

function MaskGroup116() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background96 />
    </div>
  );
}

function Container753() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup116 />
    </div>
  );
}

function Container761() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container760() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container761 />
    </div>
  );
}

function Frame98() {
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

function Container762() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame98 />
    </div>
  );
}

function Container759() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container760 />
          <Container762 />
        </div>
      </div>
    </div>
  );
}

function Background97() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container759 />
    </div>
  );
}

function MaskGroup117() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background97 />
    </div>
  );
}

function Container758() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup117 />
    </div>
  );
}

function Container766() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container765() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container766 />
    </div>
  );
}

function Frame99() {
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

function Container767() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame99 />
    </div>
  );
}

function Container764() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container765 />
          <Container767 />
        </div>
      </div>
    </div>
  );
}

function Background98() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container764 />
    </div>
  );
}

function MaskGroup118() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background98 />
    </div>
  );
}

function Container763() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup118 />
    </div>
  );
}

function Container771() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container770() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container771 />
    </div>
  );
}

function Frame100() {
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

function Container772() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame100 />
    </div>
  );
}

function Container769() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container770 />
          <Container772 />
        </div>
      </div>
    </div>
  );
}

function Background99() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container769 />
    </div>
  );
}

function MaskGroup119() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background99 />
    </div>
  );
}

function Container768() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup119 />
    </div>
  );
}

function Container776() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container775() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container776 />
    </div>
  );
}

function Frame101() {
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

function Container777() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame101 />
    </div>
  );
}

function Container774() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container775 />
          <Container777 />
        </div>
      </div>
    </div>
  );
}

function Background100() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container774 />
    </div>
  );
}

function MaskGroup120() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background100 />
    </div>
  );
}

function Container773() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup120 />
    </div>
  );
}

function Container781() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container780() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container781 />
    </div>
  );
}

function Frame102() {
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

function Container782() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame102 />
    </div>
  );
}

function Container779() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container780 />
          <Container782 />
        </div>
      </div>
    </div>
  );
}

function Background101() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container779 />
    </div>
  );
}

function MaskGroup121() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background101 />
    </div>
  );
}

function Container778() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup121 />
    </div>
  );
}

function Container747() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[20286px] top-0" data-name="Container">
      <Container748 />
      <Container753 />
      <Container758 />
      <Container763 />
      <Container768 />
      <Container773 />
      <Container778 />
    </div>
  );
}

function Container787() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container786() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container787 />
    </div>
  );
}

function Frame103() {
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

function Container788() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame103 />
    </div>
  );
}

function Container785() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container786 />
          <Container788 />
        </div>
      </div>
    </div>
  );
}

function Background102() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container785 />
    </div>
  );
}

function MaskGroup122() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background102 />
    </div>
  );
}

function Container784() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup122 />
    </div>
  );
}

function Container792() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container791() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container792 />
    </div>
  );
}

function Frame104() {
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

function Container793() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame104 />
    </div>
  );
}

function Container790() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container791 />
          <Container793 />
        </div>
      </div>
    </div>
  );
}

function Background103() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container790 />
    </div>
  );
}

function MaskGroup123() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background103 />
    </div>
  );
}

function Container789() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup123 />
    </div>
  );
}

function Container797() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container796() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container797 />
    </div>
  );
}

function Frame105() {
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

function Container798() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame105 />
    </div>
  );
}

function Container795() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container796 />
          <Container798 />
        </div>
      </div>
    </div>
  );
}

function Background104() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container795 />
    </div>
  );
}

function MaskGroup124() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background104 />
    </div>
  );
}

function Container794() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup124 />
    </div>
  );
}

function Container802() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container801() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container802 />
    </div>
  );
}

function Frame106() {
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

function Container803() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame106 />
    </div>
  );
}

function Container800() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container801 />
          <Container803 />
        </div>
      </div>
    </div>
  );
}

function Background105() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container800 />
    </div>
  );
}

function MaskGroup125() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background105 />
    </div>
  );
}

function Container799() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup125 />
    </div>
  );
}

function Container807() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container806() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container807 />
    </div>
  );
}

function Frame107() {
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

function Container808() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame107 />
    </div>
  );
}

function Container805() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container806 />
          <Container808 />
        </div>
      </div>
    </div>
  );
}

function Background106() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container805 />
    </div>
  );
}

function MaskGroup126() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background106 />
    </div>
  );
}

function Container804() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup126 />
    </div>
  );
}

function Container812() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container811() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container812 />
    </div>
  );
}

function Frame108() {
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

function Container813() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame108 />
    </div>
  );
}

function Container810() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container811 />
          <Container813 />
        </div>
      </div>
    </div>
  );
}

function Background107() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container810 />
    </div>
  );
}

function MaskGroup127() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background107 />
    </div>
  );
}

function Container809() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup127 />
    </div>
  );
}

function Container817() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container816() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container817 />
    </div>
  );
}

function Frame109() {
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

function Container818() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame109 />
    </div>
  );
}

function Container815() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container816 />
          <Container818 />
        </div>
      </div>
    </div>
  );
}

function Background108() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container815 />
    </div>
  );
}

function MaskGroup128() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background108 />
    </div>
  );
}

function Container814() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup128 />
    </div>
  );
}

function Container783() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[23184px] top-0" data-name="Container">
      <Container784 />
      <Container789 />
      <Container794 />
      <Container799 />
      <Container804 />
      <Container809 />
      <Container814 />
    </div>
  );
}

function Container823() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container822() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container823 />
    </div>
  );
}

function Frame110() {
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

function Container824() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame110 />
    </div>
  );
}

function Container821() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container822 />
          <Container824 />
        </div>
      </div>
    </div>
  );
}

function Background109() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container821 />
    </div>
  );
}

function MaskGroup129() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background109 />
    </div>
  );
}

function Container820() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup129 />
    </div>
  );
}

function Container828() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container827() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container828 />
    </div>
  );
}

function Frame111() {
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

function Container829() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame111 />
    </div>
  );
}

function Container826() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container827 />
          <Container829 />
        </div>
      </div>
    </div>
  );
}

function Background110() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container826 />
    </div>
  );
}

function MaskGroup130() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background110 />
    </div>
  );
}

function Container825() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup130 />
    </div>
  );
}

function Container833() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container832() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container833 />
    </div>
  );
}

function Frame112() {
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

function Container834() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame112 />
    </div>
  );
}

function Container831() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container832 />
          <Container834 />
        </div>
      </div>
    </div>
  );
}

function Background111() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container831 />
    </div>
  );
}

function MaskGroup131() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background111 />
    </div>
  );
}

function Container830() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup131 />
    </div>
  );
}

function Container838() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container837() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container838 />
    </div>
  );
}

function Frame113() {
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

function Container839() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame113 />
    </div>
  );
}

function Container836() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container837 />
          <Container839 />
        </div>
      </div>
    </div>
  );
}

function Background112() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container836 />
    </div>
  );
}

function MaskGroup132() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background112 />
    </div>
  );
}

function Container835() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup132 />
    </div>
  );
}

function Container843() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container842() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container843 />
    </div>
  );
}

function Frame114() {
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

function Container844() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame114 />
    </div>
  );
}

function Container841() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container842 />
          <Container844 />
        </div>
      </div>
    </div>
  );
}

function Background113() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container841 />
    </div>
  );
}

function MaskGroup133() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background113 />
    </div>
  );
}

function Container840() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup133 />
    </div>
  );
}

function Container848() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container847() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container848 />
    </div>
  );
}

function Frame115() {
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

function Container849() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame115 />
    </div>
  );
}

function Container846() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container847 />
          <Container849 />
        </div>
      </div>
    </div>
  );
}

function Background114() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container846 />
    </div>
  );
}

function MaskGroup134() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background114 />
    </div>
  );
}

function Container845() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup134 />
    </div>
  );
}

function Container853() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container852() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container853 />
    </div>
  );
}

function Frame116() {
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

function Container854() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame116 />
    </div>
  );
}

function Container851() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container852 />
          <Container854 />
        </div>
      </div>
    </div>
  );
}

function Background115() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container851 />
    </div>
  );
}

function MaskGroup135() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background115 />
    </div>
  );
}

function Container850() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup135 />
    </div>
  );
}

function Container819() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[26082px] top-0" data-name="Container">
      <Container820 />
      <Container825 />
      <Container830 />
      <Container835 />
      <Container840 />
      <Container845 />
      <Container850 />
    </div>
  );
}

function Container859() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container858() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container859 />
    </div>
  );
}

function Frame117() {
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

function Container860() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame117 />
    </div>
  );
}

function Container857() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container858 />
          <Container860 />
        </div>
      </div>
    </div>
  );
}

function Background116() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container857 />
    </div>
  );
}

function MaskGroup136() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background116 />
    </div>
  );
}

function Container856() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup136 />
    </div>
  );
}

function Container864() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">thisisaaccount</p>
      </div>
    </div>
  );
}

function Container863() {
  return (
    <div className="content-stretch flex items-center pl-[48px] pr-[0.01px] py-[8px] relative shrink-0" data-name="Container">
      <Container864 />
    </div>
  );
}

function Frame118() {
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

function Container865() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame118 />
    </div>
  );
}

function Container862() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container863 />
          <Container865 />
        </div>
      </div>
    </div>
  );
}

function Background117() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container862 />
    </div>
  );
}

function MaskGroup137() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background117 />
    </div>
  );
}

function Container861() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup137 />
    </div>
  );
}

function Container869() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container868() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container869 />
    </div>
  );
}

function Frame119() {
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

function Container870() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame119 />
    </div>
  );
}

function Container867() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container868 />
          <Container870 />
        </div>
      </div>
    </div>
  );
}

function Background118() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container867 />
    </div>
  );
}

function MaskGroup138() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background118 />
    </div>
  );
}

function Container866() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup138 />
    </div>
  );
}

function Container874() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container873() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container874 />
    </div>
  );
}

function Frame120() {
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

function Container875() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame120 />
    </div>
  );
}

function Container872() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container873 />
          <Container875 />
        </div>
      </div>
    </div>
  );
}

function Background119() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container872 />
    </div>
  );
}

function MaskGroup139() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background119 />
    </div>
  );
}

function Container871() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup139 />
    </div>
  );
}

function Container879() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">liamwealthy</p>
      </div>
    </div>
  );
}

function Container878() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container879 />
    </div>
  );
}

function Frame121() {
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

function Container880() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame121 />
    </div>
  );
}

function Container877() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container878 />
          <Container880 />
        </div>
      </div>
    </div>
  );
}

function Background120() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container877 />
    </div>
  );
}

function MaskGroup140() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background120 />
    </div>
  );
}

function Container876() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup140 />
    </div>
  );
}

function Container884() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">baddyjam</p>
      </div>
    </div>
  );
}

function Container883() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container884 />
    </div>
  );
}

function Frame122() {
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

function Container885() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame122 />
    </div>
  );
}

function Container882() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container883 />
          <Container885 />
        </div>
      </div>
    </div>
  );
}

function Background121() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container882 />
    </div>
  );
}

function MaskGroup141() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background121 />
    </div>
  );
}

function Container881() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup141 />
    </div>
  );
}

function Container889() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">furniturelover</p>
      </div>
    </div>
  );
}

function Container888() {
  return (
    <div className="content-stretch flex items-center pl-[48px] py-[8px] relative shrink-0" data-name="Container">
      <Container889 />
    </div>
  );
}

function Frame123() {
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

function Container890() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Frame123 />
    </div>
  );
}

function Container887() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative w-full">
          <Container888 />
          <Container890 />
        </div>
      </div>
    </div>
  );
}

function Background122() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_444px] pt-[384px] rounded-[10px] top-0 w-[384px]" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container887 />
    </div>
  );
}

function MaskGroup142() {
  return (
    <div className="h-[444px] relative shrink-0 w-[384px]" data-name="Mask Group">
      <Background122 />
    </div>
  );
}

function Container886() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0" data-name="Container">
      <MaskGroup142 />
    </div>
  );
}

function Container855() {
  return (
    <div className="absolute bottom-0 content-center flex flex-wrap gap-0 items-center left-[28980px] top-0" data-name="Container">
      <Container856 />
      <Container861 />
      <Container866 />
      <Container871 />
      <Container876 />
      <Container881 />
      <Container886 />
    </div>
  );
}

function ScrollingPromotion() {
  return (
    <div className="h-[444px] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="scrolling-promotion">
      <Container495 />
      <Container531 />
      <Container567 />
      <Container603 />
      <Container639 />
      <Container675 />
      <Container711 />
      <Container747 />
      <Container783 />
      <Container819 />
      <Container855 />
    </div>
  );
}

function Background45() {
  return (
    <div className="bg-[#dad5c7] content-stretch flex flex-col items-start pb-[80px] pt-[60px] relative shrink-0 w-full" data-name="Background">
      <Container492 />
      <ScrollingPromotion />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[197px]" data-name="Main">
      <Background1 />
      <div className="bg-white h-[8px] shrink-0 w-full" data-name="Background" />
      <Section />
      <MaskGroup18 />
      <Background8 />
      <Section1 />
      <Section2 />
      <Background19 />
      <Section3 />
      <Background24 />
      <Section4 />
      <Background33 />
      <Container361 />
      <Section5 />
      <Background39 />
      <Background40 />
      <Section6 />
      <Section7 />
      <Background45 />
    </div>
  );
}

function MotionElementSvg9() {
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

function Container892() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg9 />
    </div>
  );
}

function Container895() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">Mon-Sat, 9am-6pm EST.</p>
      </div>
    </div>
  );
}

function Container894() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container895 />
    </div>
  );
}

function Margin21() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container894 />
    </div>
  );
}

function Container893() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Customer Service</p>
      </div>
      <Margin21 />
    </div>
  );
}

function Background123() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container892 />
      <Container893 />
    </div>
  );
}

function Container891() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background123 />
      <div className="absolute bottom-0 right-[-25px] top-0 w-[0.8px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MotionElementSvg10() {
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

function Container897() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg10 />
    </div>
  );
}

function Container900() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">+1 888-234-1234 (tool-free)</p>
      </div>
    </div>
  );
}

function Container899() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container900 />
    </div>
  );
}

function Margin22() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container899 />
    </div>
  );
}

function Container898() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Call Us</p>
      </div>
      <Margin22 />
    </div>
  );
}

function Background124() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container897 />
      <Container898 />
    </div>
  );
}

function Container896() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background124 />
      <div className="absolute bottom-0 right-[-25px] top-0 w-[0.8px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MotionElementSvg11() {
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

function Container902() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg11 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="decoration-solid leading-[24px] underline">touch@masonstore.com</p>
      </div>
    </div>
  );
}

function Container905() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link13 />
    </div>
  );
}

function Container904() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container905 />
    </div>
  );
}

function Margin23() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container904 />
    </div>
  );
}

function Container903() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Get in Touch</p>
      </div>
      <Margin23 />
    </div>
  );
}

function Background125() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container902 />
      <Container903 />
    </div>
  );
}

function Container901() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background125 />
      <div className="absolute bottom-0 right-[-25px] top-0 w-[0.8px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MotionElementSvg12() {
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

function Container906() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[32px]" data-name="Container">
      <MotionElementSvg12 />
    </div>
  );
}

function Container909() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">382 NE 191st St # 87394 Miami</p>
      </div>
    </div>
  );
}

function Container908() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container909 />
    </div>
  );
}

function Margin24() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container908 />
    </div>
  );
}

function Container907() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Address</p>
      </div>
      <Margin24 />
    </div>
  );
}

function Background126() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Background">
      <Container906 />
      <Container907 />
    </div>
  );
}

function MulticolumnIcon2() {
  return (
    <div className="content-stretch flex gap-[50px] items-start justify-center min-h-[52px] relative shrink-0 w-full" data-name="multicolumn-icon">
      <Container891 />
      <Container896 />
      <Container901 />
      <Background126 />
    </div>
  );
}

function SectionSectionsFooterGroup() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[252.5px] py-[32px] right-0 top-[9630.84px]" data-name="Section - sections: footer-group">
      <MulticolumnIcon2 />
    </div>
  );
}

function Heading43() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[250px] relative shrink-0 w-[250px]" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[32px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Find one of our</p>
        <p>11 stores nearest you.</p>
      </div>
    </div>
  );
}

function Container915() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading43 />
    </div>
  );
}

function Container917() {
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

function Link14() {
  return (
    <div className="bg-black max-w-[728.75px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-[9px] relative rounded-[inherit]">
        <Container917 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container916() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link14 />
    </div>
  );
}

function Container914() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container915 />
      <Container916 />
    </div>
  );
}

function Container913() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container914 />
    </div>
  );
}

function Container912() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[728.75px]" data-name="Container">
      <Container913 />
    </div>
  );
}

function Heading44() {
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

function SlotSummary() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading44 />
    </div>
  );
}

function Link15() {
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
      <Link15 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary />
      <SlotListItem />
    </div>
  );
}

function Container918() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details />
    </div>
  );
}

function Heading45() {
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

function SlotSummary1() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading45 />
    </div>
  );
}

function Link16() {
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
      <Link16 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary1 />
      <SlotListItem1 />
    </div>
  );
}

function Container919() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details1 />
    </div>
  );
}

function Heading46() {
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

function SlotSummary2() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading46 />
    </div>
  );
}

function Link17() {
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
      <Link17 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary2 />
      <SlotListItem2 />
    </div>
  );
}

function Container920() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details2 />
    </div>
  );
}

function Container911() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_30px] items-start relative shrink-0 w-[1415px]" data-name="Container">
      <Container912 />
      <Container918 />
      <Container919 />
      <Container920 />
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

function Background127() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 size-[20px]" data-name="Background">
      <EeSvgFill />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

function Svg113() {
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
      <Background127 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Estonia (EUR €)</p>
      </div>
      <Svg113 />
    </div>
  );
}

function Container925() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.2px] relative shrink-0" data-name="Container">
      <LocalizationFormFormButton />
    </div>
  );
}

function Container924() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container925 />
    </div>
  );
}

function Container923() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0" data-name="Container">
      <Container924 />
    </div>
  );
}

function Container922() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container923 />
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">NANAILS.EU</p>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Powered by Shopify</p>
      </div>
    </div>
  );
}

function Container927() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{`© 2026 `}</p>
      </div>
      <Link18 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{`. `}</p>
      </div>
      <Link19 />
    </div>
  );
}

function Container926() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container927 />
    </div>
  );
}

function Container921() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[31.6px] items-start pt-[40px] px-[252.5px] relative w-full">
        <Container922 />
        <Container926 />
      </div>
    </div>
  );
}

function Container910() {
  return (
    <div className="content-stretch flex flex-col items-center py-[40px] relative shrink-0 w-full" data-name="Container">
      <Container911 />
      <Container921 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 right-0 top-[9746.84px]" data-name="Footer">
      <div className="h-[0.8px] relative shrink-0 w-[1415px]" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      </div>
      <Container910 />
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

function Link20() {
  return (
    <div className="content-stretch flex items-start max-w-[65px] relative shrink-0" data-name="Link">
      <NanailsEu />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[65px]" data-name="Heading 1">
      <Link20 />
    </div>
  );
}

function Container931() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[54px] top-[14.4px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.5)] whitespace-nowrap">
        <p className="leading-[normal]">What are you looking for?</p>
      </div>
    </div>
  );
}

function Container933() {
  return <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px" data-name="Container" />;
}

function Container932() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] pr-[4px] right-[50px] top-0" data-name="Container">
      <Container933 />
    </div>
  );
}

function ComboboxListbox() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px overflow-clip relative rounded-[100px]" data-name="Combobox listbox">
      <Container931 />
      <Container932 />
    </div>
  );
}

function Container934() {
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
      <Container934 />
    </div>
  );
}

function Svg114() {
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
      <Svg114 />
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

function Container930() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Search />
    </div>
  );
}

function PredictiveSearch() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[630px] min-h-px min-w-[630px] relative" data-name="predictive-search">
      <Container930 />
    </div>
  );
}

function Container929() {
  return (
    <div className="content-stretch flex items-center justify-center px-[18px] relative shrink-0 w-[666px]" data-name="Container">
      <PredictiveSearch />
    </div>
  );
}

function Svg115() {
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

function Container937() {
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
      <Svg115 />
      <Container937 />
    </div>
  );
}

function Svg116() {
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

function Link21() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Link">
      <Svg116 />
      <Component3Items />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pr-[6px] relative shrink-0 w-[54px]" data-name="Link:margin">
      <Link21 />
    </div>
  );
}

function Container936() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative self-stretch shrink-0" data-name="Container">
      <LinkAccount />
      <LinkMargin />
    </div>
  );
}

function Container935() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[660px]" data-name="Container">
      <Container936 />
    </div>
  );
}

function Background128() {
  return (
    <div className="bg-[#ff9b54] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[252.5px] py-[10px] relative w-full">
          <Heading />
          <Container929 />
          <Container935 />
        </div>
      </div>
    </div>
  );
}

function Container939() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container939 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link22 />
    </div>
  );
}

function Container940() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Catalog</p>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container940 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link23 />
    </div>
  );
}

function Background129() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Background129 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link24 />
    </div>
  );
}

function NavigationPrimaryList() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative self-stretch shrink-0" data-name="Navigation - Primary → List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container938() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Container">
      <NavigationPrimaryList />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-white relative shadow-[0px_4px_17.998px_0px_rgba(0,0,0,0.1)] shrink-0 w-full z-[1]" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col items-start pl-[236.5px] pr-[252.5px] relative w-full">
        <Container938 />
        <div className="absolute bg-white inset-0" data-name="Background" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Header">
      <Background128 />
      <BackgroundShadow3 />
    </div>
  );
}

function Container928() {
  return (
    <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="Container">
      <Header />
    </div>
  );
}

function Container943() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">✌🏼 Free Express Shipping on orders $120!</p>
      </div>
    </div>
  );
}

function Container942() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-[458.33px]" data-name="Container">
      <Container943 />
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

function Background130() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-72.93px)] rounded-[10px] size-[20px] top-1/2" data-name="Background">
      <EeSvgFill1 />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

function Svg117() {
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
      <Background130 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[calc(50%+4.19px)] text-[15px] text-black text-center top-[calc(50%-0.7px)] w-[118.233px]">
        <p className="leading-[15px] whitespace-pre-wrap">Estonia (EUR €)</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+76.93px)] size-[12px] top-1/2">
        <div className="flex-none rotate-180">
          <Svg117 />
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

function Container946() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <LocalizationForm />
    </div>
  );
}

function Container945() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container946 />
    </div>
  );
}

function Container944() {
  return (
    <div className="content-center flex flex-wrap items-center justify-end relative shrink-0 w-[458.34px]" data-name="Container">
      <Container945 />
    </div>
  );
}

function Container941() {
  return (
    <div className="content-stretch flex gap-[498.33px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container942 />
      <Container944 />
    </div>
  );
}

function SectionsHeaderGroup() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[252.5px] py-[12px] right-0 top-0" data-name="sections: header-group">
      <Container941 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[10108.84px] left-0 right-0 top-0" data-name="Container">
      <Main />
      <SectionSectionsFooterGroup />
      <Footer />
      <div className="absolute h-[10060.83984375px] inset-[48px_0_0_0] pointer-events-none">
        <Container928 />
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