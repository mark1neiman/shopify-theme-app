import svgPaths from "./svg-fyt6onfcaj";
import { imgBackground, imgBackground1, imgBackground2 } from "./svg-c2meb";

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

function Svg() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.12px_-0.12px_-0.13px_-0.13px] overflow-clip" data-name="SVG">
      <Frame />
    </div>
  );
}

function MotionElementPicture() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="motion-element → Picture">
      <Svg />
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

function Container3() {
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
        <Container3 />
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <MotionElement />
      <MotionElement1 />
      <MotionElement2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[32px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
      <MotionElementPicture />
      <Container1 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute inset-[0_711.5px_0_0]" data-name="Mask Group">
      <Background1 />
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

function Svg1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[-0.06px_-0.12px_-0.06px_-0.13px] overflow-clip" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function MotionElementPicture1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="motion-element → Picture">
      <Svg1 />
      <div className="absolute bg-black inset-0 opacity-10" data-name="Background" />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col inset-0 items-start justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <MotionElementPicture1 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute inset-[0_355.75px_0_711.5px]" data-name="Mask Group">
      <Background2 />
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

function Container6() {
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
      <Container6 />
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

function Container7() {
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
        <Container7 />
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

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElement3 />
      <MotionElementMargin />
      <MotionElementMargin1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center p-[24px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] rounded-[10px]" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <MotionElementPictureSvg />
      <Container4 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute inset-[0_0_355.75px_1067.25px]" data-name="Mask Group">
      <Background3 />
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

function Container10() {
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
      <Container10 />
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

function Button2() {
  return (
    <div className="bg-white h-[38px] opacity-50 relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[20.8px] py-px relative rounded-[inherit]">
        <Container11 />
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

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <MotionElement6 />
      <MotionElementMargin2 />
      <MotionElementMargin3 />
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
      <MotionElementPictureSvg1 />
      <Container8 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute inset-[355.75px_0_0_1067.25px]" data-name="Mask Group">
      <Background4 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[703.5px] relative shrink-0 w-full" data-name="Container">
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
      <MaskGroup3 />
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[40px] px-[252.5px] relative size-full" data-name="Background">
      <Container />
    </div>
  );
}