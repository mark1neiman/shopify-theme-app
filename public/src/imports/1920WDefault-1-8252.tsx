import svgPaths from "./svg-38osxs0zh8";
import imgLinkGelPolishHolyMollyPantone1011MlMotionElement from "figma:asset/12315c22a26e7ef389758f785bb8655d0750f39b.png";
import imgLinkGelPolishHolyMollyPantone1111MlMotionElement from "figma:asset/845f521bf9b9c5f5237256480183f6bf7c541dbe.png";
import imgLinkGelPolishHolyMollyPantone811MlMotionElement from "figma:asset/1b49202eb1555df77eb03fa251584457d575f99d.png";
import imgLinkGelPolishHolyMollyPantone911MlMotionElement from "figma:asset/7782f6519c7497135102c7950464d4ee116b1e3d.png";
import imgNanailsEu from "figma:asset/130f8557bbf2bade2e7c9765c5990b889e61aacc.png";
import { imgBackground, imgBackground1 } from "./svg-6omso";

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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">Products</p>
      </div>
    </div>
  );
}

function NavigationBreadcrumbs() {
  return (
    <div className="absolute content-stretch flex items-center left-[252.5px] right-[252.5px] top-[20px]" data-name="Navigation - breadcrumbs">
      <Link />
      <Margin />
      <Container4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px] whitespace-pre-wrap">Products</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start py-[40px] relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[100px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#eedab8] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_128px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
      <Container5 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute h-[128px] left-[252.5px] right-[252.5px] top-[64px]" data-name="Mask Group">
      <Background1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame />
    </div>
  );
}

function MotionElement() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg1 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement />
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-y-1/2 absolute right-[4px] size-[12px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d="M4.5 2.25L8.25 6L4.5 9.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
      <Svg2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function LinkCollectionsName() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay />
      <Container10 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background2 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function MotionElement1() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg3 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement1 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-y-1/2 absolute right-[4px] size-[12px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d="M4.5 2.25L8.25 6L4.5 9.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
      <Svg4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
    </div>
  );
}

function LinkCollectionsName1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay1 />
      <Container12 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame2 />
    </div>
  );
}

function MotionElement2() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg5 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement2 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-y-1/2 absolute right-[4px] size-[12px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d="M4.5 2.25L8.25 6L4.5 9.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
      <Svg6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function LinkCollectionsName2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay2 />
      <Container14 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background4 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function MotionElement3() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg7 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement3 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-y-1/2 absolute right-[4px] size-[12px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d="M4.5 2.25L8.25 6L4.5 9.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
      <Svg8 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
    </div>
  );
}

function LinkCollectionsName3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay3 />
      <Container16 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background5 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function MotionElement4() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg9 />
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement4 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-y-1/2 absolute right-[4px] size-[12px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d="M4.5 2.25L8.25 6L4.5 9.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
      <Svg10 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
    </div>
  );
}

function LinkCollectionsName4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay4 />
      <Container18 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName4 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background6 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function MotionElement5() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg11 />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement5 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="-translate-y-1/2 absolute right-[4px] size-[12px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d="M4.5 2.25L8.25 6L4.5 9.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
      <Svg12 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
    </div>
  );
}

function LinkCollectionsName5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay5 />
      <Container20 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background7 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame6 />
    </div>
  );
}

function MotionElement6() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg13 />
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement6 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="-translate-y-1/2 absolute right-[4px] size-[12px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d="M4.5 2.25L8.25 6L4.5 9.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
      <Svg14 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
    </div>
  );
}

function LinkCollectionsName6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay6 />
      <Container22 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background8 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container21 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame7 />
    </div>
  );
}

function MotionElement7() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg15 />
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement7 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="-translate-y-1/2 absolute right-[4px] size-[12px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d="M4.5 2.25L8.25 6L4.5 9.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
      <Svg16 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading8 />
    </div>
  );
}

function LinkCollectionsName7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay7 />
      <Container24 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName7 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background9 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame8 />
    </div>
  );
}

function MotionElement8() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg17 />
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement8 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="-translate-y-1/2 absolute right-[4px] size-[12px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d="M4.5 2.25L8.25 6L4.5 9.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
      <Svg18 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
    </div>
  );
}

function LinkCollectionsName8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay8 />
      <Container26 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName8 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background10 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container25 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p3010f900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p32563d00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pb58fb00} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_3" />
          <path d={svgPaths.p13136380} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_4" />
          <path d={svgPaths.p24a804e0} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_5" />
          <path d={svgPaths.p86c4900} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="SVG">
      <Frame9 />
    </div>
  );
}

function MotionElement9() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="motion-element">
      <Svg19 />
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col items-start max-w-[130px] overflow-clip relative rounded-[999px] shrink-0 w-[80px]" data-name="Overlay">
      <MotionElement9 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pl-[22.3px] pr-[22.31px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="mb-0">{`Collection's`}</p>
        <p>name</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] pt-[11.6px] relative shrink-0 w-full" data-name="Container">
      <Heading10 />
    </div>
  );
}

function LinkCollectionsName9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay9 />
      <Container28 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName9 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background11 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container27 />
    </div>
  );
}

function Overlay10() {
  return <div className="bg-[rgba(0,0,0,0.03)] max-w-[130px] rounded-[999px] shrink-0 size-[80px]" data-name="Overlay" />;
}

function Container30() {
  return <div className="h-[67.2px] shrink-0 w-full" data-name="Container" />;
}

function LinkCollectionsName10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay10 />
      <Container30 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName10 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background12 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Overlay11() {
  return <div className="bg-[rgba(0,0,0,0.03)] max-w-[130px] rounded-[999px] shrink-0 size-[80px]" data-name="Overlay" />;
}

function Container32() {
  return <div className="h-[67.2px] shrink-0 w-full" data-name="Container" />;
}

function LinkCollectionsName11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay11 />
      <Container32 />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName11 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background13 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container31 />
    </div>
  );
}

function Overlay12() {
  return <div className="bg-[rgba(0,0,0,0.03)] max-w-[130px] rounded-[999px] shrink-0 size-[80px]" data-name="Overlay" />;
}

function Container34() {
  return <div className="h-[67.2px] shrink-0 w-full" data-name="Container" />;
}

function LinkCollectionsName12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link - Collection\'s name">
      <Overlay12 />
      <Container34 />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Background">
      <LinkCollectionsName12 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[130px]" data-name="Container">
      <Background14 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[150px]" data-name="Margin">
      <Container33 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1950px]" data-name="Container">
      <Margin1 />
      <Margin2 />
      <Margin3 />
      <Margin4 />
      <Margin5 />
      <Margin6 />
      <Margin7 />
      <Margin8 />
      <Margin9 />
      <Margin10 />
      <Margin11 />
      <Margin12 />
      <Margin13 />
    </div>
  );
}

function CollectionList() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="collection-list">
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <CollectionList />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[252.5px] py-[20px] right-0 top-[192px]" data-name="Section">
      <Container7 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="List">
      <div className="bg-[#f3f3f3] relative rounded-[5px] shrink-0 size-[70px]" data-name="Item">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="bg-[#f3f3f3] relative rounded-[5px] shrink-0 size-[70px]" data-name="Item">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="bg-[#f3f3f3] relative rounded-[5px] shrink-0 size-[70px]" data-name="Item">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="bg-[#f3f3f3] relative rounded-[5px] shrink-0 size-[70px]" data-name="Item">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="bg-[#f3f3f3] relative rounded-[5px] shrink-0 size-[70px]" data-name="Item">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-auto overflow-y-clip pb-[13.2px] pt-[20px] relative shrink-0" data-name="Container">
      <List />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Margin">
      <Container37 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">0</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">/5</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Compare (</p>
      </div>
      <Container40 />
      <Container41 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">)</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
          <p className="leading-[30px]">Compare</p>
        </div>
      </div>
    </div>
  );
}

function ButtonDialog1() {
  return (
    <div className="bg-black h-[48px] opacity-50 relative rounded-[100px] shrink-0" data-name="Button dialog">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[32.8px] py-px relative rounded-[inherit]">
        <Container43 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center py-px relative shrink-0" data-name="Button">
      <div className="capitalize flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[20px]">Clear all</p>
      </div>
      <div className="absolute bg-black bottom-0 h-px left-0 right-0" data-name="Horizontal Divider" />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <ButtonDialog1 />
      <Button />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px py-[12px] relative" data-name="Container">
      <Container39 />
      <Container42 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Margin14 />
      <Container38 />
    </div>
  );
}

function CompareBar() {
  return (
    <div className="absolute bg-white bottom-[-196.2px] content-stretch flex flex-col items-start left-0 px-[252.5px] right-0 shadow-[0px_-6px_10px_0px_rgba(0,0,0,0.08)]" data-name="compare-bar">
      <Container36 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p30bfc580} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Filter</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[inherit]">
        <Svg20 />
        <Container48 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[48px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[16.8px] py-px relative rounded-[inherit]">
        <Container47 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">4 products</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container46 />
      <Container49 />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white left-0 opacity-0 rounded-[2px] size-[1.6px] top-[11.2px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.6)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[12.868px] items-center justify-center left-1/2 top-[calc(50%-1.56px)] w-[12.572px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-43">
          <div className="border-b-[1.6px] border-r-[1.6px] border-solid border-white h-[12px] w-[6px]" data-name="Border" />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Compare:</p>
      </div>
    </div>
  );
}

function Overlay13() {
  return (
    <div className="bg-[rgba(0,0,0,0.15)] h-[24px] relative rounded-[100px] shrink-0 w-[48px]" data-name="Overlay">
      <div className="absolute bg-white left-[2px] rounded-[10px] size-[20px] top-[2px]" data-name="Background" />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Label">
      <Container51 />
      <Overlay13 />
    </div>
  );
}

function CompareSwitch() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="compare-switch">
      <Input />
      <Label />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Sort by:</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pr-[0.62px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
          <p className="leading-[46px]">Alphabetically, A-Z</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center pl-[20.8px] pr-[36.8px] py-px relative rounded-[100px] shrink-0" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Container54 />
    </div>
  );
}

function Svg21() {
  return (
    <div className="-translate-y-1/2 absolute right-[16px] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M9.75 4.5L6 8.25L2.25 4.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Options />
      <Svg21 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-name="Container">
      <Label1 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">View as:</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p36accb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M12 4.5V19.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M4.5 12H19.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <Svg22 />
      </div>
    </div>
  );
}

function ButtonViewAsGrid() {
  return (
    <div className="bg-black relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - View as grid">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="absolute bg-black bottom-[-0.2px] left-[-0.2px] rounded-[23.95px] top-[-0.2px] w-[47.4px]" data-name="Background" />
        <Container56 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M9 6H20.25" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M9 12H20.25" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M9 18H20.25" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M3.75 6H5.25" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M3.75 12H5.25" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M3.75 18H5.25" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <Svg23 />
      </div>
    </div>
  );
}

function ButtonViewAsList() {
  return (
    <div className="relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - View as list">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container57 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function LayoutSwitcher() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="layout-switcher">
      <Container55 />
      <ButtonViewAsGrid />
      <ButtonViewAsList />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <CompareSwitch />
      <Container52 />
      <LayoutSwitcher />
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-white content-center flex flex-wrap items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Background">
      <Container45 />
      <Container50 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] shrink-0 sticky top-0 w-full z-[2]" data-name="Container">
      <Background16 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Availability</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2.5 8H13.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M8 2.5V13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slot → Summary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[24px] relative w-full">
        <Container61 />
        <Svg24 />
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Details">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <SlotSummary />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Price</p>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2.5 8H13.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M8 2.5V13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slot → Summary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Container62 />
        <Svg25 />
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Details">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <SlotSummary1 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Capacities</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2.5 8H13.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M8 2.5V13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slot → Summary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Container63 />
        <Svg26 />
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Details">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <SlotSummary2 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Finishes</p>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2.5 8H13.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M8 2.5V13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slot → Summary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Container64 />
        <Svg27 />
      </div>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Details">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <SlotSummary3 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Brand</p>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2.5 8H13.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M8 2.5V13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function SlotSummary4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slot → Summary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Container65 />
        <Svg28 />
      </div>
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Details">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <SlotSummary4 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Category</p>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2.5 8H13.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M8 2.5V13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function DetailsSlotSummary() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-full" data-name="Details → Slot → Summary">
      <Container66 />
      <Svg29 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[259px] relative shrink-0" data-name="Form">
      <Details />
      <Details1 />
      <Details2 />
      <Details3 />
      <Details4 />
      <DetailsSlotSummary />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0" data-name="Container">
      <Form />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[30px] relative self-stretch shrink-0 z-[2]" data-name="Container">
      <Container60 />
    </div>
  );
}

function LinkGelPolishHolyMollyPantone1011MlMotionElement() {
  return (
    <div className="h-[250.09px] overflow-clip relative shrink-0 w-full" data-name="Link - Gel Polish Holy Molly Pantone 10 11ml → motion-element">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.06%] left-0 max-w-none top-[-0.03%] w-full" src={imgLinkGelPolishHolyMollyPantone1011MlMotionElement} />
      </div>
    </div>
  );
}

function Frame10() {
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

function Button2() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[10px] max-w-[1920px] overflow-clip rounded-[24px] size-[48px] top-[10px]" data-name="Button">
      <Frame10 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Add to cart</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Container74 />
    </div>
  );
}

function ButtonAddToCart() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px opacity-0 relative rounded-[100px]" data-name="Button - Add to cart">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="absolute bottom-[5px] content-stretch flex items-center justify-center left-[20px] pt-[15px] right-[20px]" data-name="Form">
      <ButtonAddToCart />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <LinkGelPolishHolyMollyPantone1011MlMotionElement />
      <Button2 />
      <Form1 />
    </div>
  );
}

function Heading3Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[0px] text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Gel Polish Holy Molly Pantone 10</p>
        <p>11ml</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container77 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading3Link />
      <Container76 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container75 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container71 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container70 />
    </div>
  );
}

function LinkGelPolishHolyMollyPantone1111MlMotionElement() {
  return (
    <div className="h-[250.09px] overflow-clip relative shrink-0 w-full" data-name="Link - Gel Polish Holy Molly Pantone 11 11ml → motion-element">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.06%] left-0 max-w-none top-[-0.03%] w-full" src={imgLinkGelPolishHolyMollyPantone1111MlMotionElement} />
      </div>
    </div>
  );
}

function Frame11() {
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

function Button3() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[10px] max-w-[1920px] overflow-clip rounded-[24px] size-[48px] top-[10px]" data-name="Button">
      <Frame11 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Add to cart</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Container83 />
    </div>
  );
}

function ButtonAddToCart1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px opacity-0 relative rounded-[100px]" data-name="Button - Add to cart">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Form2() {
  return (
    <div className="absolute bottom-[5px] content-stretch flex items-center justify-center left-[20px] pt-[15px] right-[20px]" data-name="Form">
      <ButtonAddToCart1 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <LinkGelPolishHolyMollyPantone1111MlMotionElement />
      <Button3 />
      <Form2 />
    </div>
  );
}

function Heading3Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Gel Polish Holy Molly Pantone 11</p>
        <p>11ml</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container86 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading3Link1 />
      <Container85 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Container84 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container79 />
    </div>
  );
}

function LinkGelPolishHolyMollyPantone811MlMotionElement() {
  return (
    <div className="h-[250.14px] overflow-clip relative shrink-0 w-full" data-name="Link - Gel Polish Holy Molly Pantone 8 11ml → motion-element">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.04%] left-0 max-w-none top-[-0.02%] w-full" src={imgLinkGelPolishHolyMollyPantone811MlMotionElement} />
      </div>
    </div>
  );
}

function Frame12() {
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

function Button4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[10px] max-w-[1920px] overflow-clip rounded-[24px] size-[48px] top-[10px]" data-name="Button">
      <Frame12 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Add to cart</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Container92 />
    </div>
  );
}

function ButtonAddToCart2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px opacity-0 relative rounded-[100px]" data-name="Button - Add to cart">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Form3() {
  return (
    <div className="absolute bottom-[5px] content-stretch flex items-center justify-center left-[20px] pt-[15px] right-[20px]" data-name="Form">
      <ButtonAddToCart2 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <LinkGelPolishHolyMollyPantone811MlMotionElement />
      <Button4 />
      <Form3 />
    </div>
  );
}

function Heading3Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Gel Polish Holy Molly Pantone 8</p>
        <p>11ml</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
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
      <Heading3Link2 />
      <Container94 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Container93 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container89 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container88 />
    </div>
  );
}

function LinkGelPolishHolyMollyPantone911MlMotionElement() {
  return (
    <div className="h-[250.09px] overflow-clip relative shrink-0 w-full" data-name="Link - Gel Polish Holy Molly Pantone 9 11ml → motion-element">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.06%] left-0 max-w-none top-[-0.03%] w-full" src={imgLinkGelPolishHolyMollyPantone911MlMotionElement} />
      </div>
    </div>
  );
}

function Frame13() {
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

function Button5() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[10px] max-w-[1920px] overflow-clip rounded-[24px] size-[48px] top-[10px]" data-name="Button">
      <Frame13 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Add to cart</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Container101 />
    </div>
  );
}

function ButtonAddToCart3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px opacity-0 relative rounded-[100px]" data-name="Button - Add to cart">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container100 />
        </div>
      </div>
    </div>
  );
}

function Form4() {
  return (
    <div className="absolute bottom-[5px] content-stretch flex items-center justify-center left-[20px] pt-[15px] right-[20px]" data-name="Form">
      <ButtonAddToCart3 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <LinkGelPolishHolyMollyPantone911MlMotionElement />
      <Button5 />
      <Form4 />
    </div>
  );
}

function Heading3Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Gel Polish Holy Molly Pantone 9</p>
        <p>11ml</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container104 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading3Link3 />
      <Container103 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container99 />
      <Container102 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container98 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container97 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container78 />
      <Container87 />
      <Container96 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch z-[1]" data-name="Container">
      <Container68 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full z-[1]" data-name="Container">
      <Container59 />
      <Container67 />
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col isolate items-start pt-[28px] px-[252.5px] relative w-full">
        <Container44 />
        <Container58 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[379.2px]" data-name="Container">
      <CompareBar />
      <div className="h-[0.8px] relative shrink-0 w-[1415px]" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      </div>
      <Background15 />
    </div>
  );
}

function Heading2MotionElement() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[38px] whitespace-pre-wrap">About Mason</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4a4a4a] text-[15px] whitespace-nowrap">
        <p className="mb-0">From classic cotton and wool to advanced performance fabrics like spandex blends and moisture-wicking synthetics, each material brings its own advantages—softness,</p>
        <p>durability, breathability, or stretch. These choices shape not just how clothing feels, but how it functions in daily life.</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[60px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4a4a4a] text-[15px] whitespace-nowrap">
        <p className="mb-0">Selecting apparel goes beyond chasing trends; it’s about curating a wardrobe that reflects your personality while balancing comfort, practicality, and style. Minimalist pieces</p>
        <p className="mb-0">offer clean elegance, while retro prints, bold patterns, or textured knits speak to a more expressive taste. Whether you’re drawn to timeless staples or eye-catching statements,</p>
        <p>understanding fabric and form helps you choose clothing, hats, and socks that match your lifestyle and individuality.…</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[120px] max-h-[120px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <Container107 />
      <div className="absolute bg-gradient-to-b from-[66%] from-[rgba(245,245,245,0)] inset-0 to-[#f5f5f5]" data-name="Gradient" />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">View more</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[2px] relative shrink-0" data-name="Button">
      <Container108 />
      <div className="absolute bg-black bottom-0 h-px left-0 right-0" data-name="Horizontal Divider" />
    </div>
  );
}

function MotionElementReadMore() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="motion-element → read-more">
      <Container105 />
      <Button6 />
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[12px] items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_288px] pb-[40px] pt-[39.4px] px-[50px] right-0 rounded-[10px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <Heading2MotionElement />
      <MotionElementReadMore />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[288px] left-[252.5px] right-[252.5px] top-[976px]" data-name="Section">
      <Background17 />
    </div>
  );
}

function Heading2MotionElement1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[42px] whitespace-pre-wrap">Explore Popular Search</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading2MotionElement1 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container111 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Eco knit Cardigan</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <Container115 />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container114 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 1 / 9">
      <Border />
    </div>
  );
}

function Group19Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 1 / 9:margin">
      <Group />
    </div>
  );
}

function Svg30() {
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

function Container117() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg30 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Cashmere Sweater</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container117 />
        <Container118 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container116 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 2 / 9">
      <Border1 />
    </div>
  );
}

function Group29Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 2 / 9:margin">
      <Group1 />
    </div>
  );
}

function Svg31() {
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

function Container120() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg31 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">{`Dresses & Skirts`}</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container120 />
        <Container121 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container119 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 3 / 9">
      <Border2 />
    </div>
  );
}

function Group39Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 3 / 9:margin">
      <Group2 />
    </div>
  );
}

function Svg32() {
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

function Container123() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg32 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Cold Weather</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container123 />
        <Container124 />
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container122 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 4 / 9">
      <Border3 />
    </div>
  );
}

function Group49Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 4 / 9:margin">
      <Group3 />
    </div>
  );
}

function Svg33() {
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

function Container126() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg33 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Cold Weather</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container126 />
        <Container127 />
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container125 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 5 / 9">
      <Border4 />
    </div>
  );
}

function Group59Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 5 / 9:margin">
      <Group4 />
    </div>
  );
}

function Svg34() {
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

function Container129() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg34 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Accessories</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container129 />
        <Container130 />
      </div>
    </div>
  );
}

function Border5() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container128 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 6 / 9">
      <Border5 />
    </div>
  );
}

function Group69Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 6 / 9:margin">
      <Group5 />
    </div>
  );
}

function Svg35() {
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

function Container132() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg35 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[30px]">Fleece Jackets</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container132 />
        <Container133 />
      </div>
    </div>
  );
}

function Border6() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container131 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 7 / 9">
      <Border6 />
    </div>
  );
}

function Group79Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 7 / 9:margin">
      <Group6 />
    </div>
  );
}

function Svg36() {
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

function Container135() {
  return (
    <div className="content-stretch flex items-start relative rounded-[999px] shrink-0 w-[20px]" data-name="Container">
      <Svg36 />
    </div>
  );
}

function Container134() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit]">
        <Container135 />
        <div className="h-[30px] shrink-0 w-[51px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Border7() {
  return (
    <div className="min-h-[48px] relative rounded-[100px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip px-[20.8px] py-[8.8px] relative rounded-[inherit]">
        <Container134 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Group7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Group - 8 / 9">
      <Border7 />
    </div>
  );
}

function Group89Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[12px] relative shrink-0" data-name="Group - 8 / 9:margin">
      <Group7 />
    </div>
  );
}

function Group99Margin() {
  return <div className="h-full shrink-0 w-[181.99px]" data-name="Group - 9 / 9:margin" />;
}

function Container113() {
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
      <Container113 />
      <div className="absolute bottom-0 flex items-center justify-center left-[-28px] top-0 w-[70px]">
        <div className="-scale-y-100 flex-none h-[48px] rotate-180 w-[70px]">
          <div className="opacity-0 size-full" data-name="Gradient" style={{ backgroundImage: "linear-gradient(-88.14deg, rgb(255, 255, 255) 35.56%, rgba(255, 255, 255, 0) 98.43%)" }} />
        </div>
      </div>
      <div className="absolute bottom-0 right-[-28px] top-0 w-[70px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(-88.14deg, rgb(255, 255, 255) 35.56%, rgba(255, 255, 255, 0) 98.43%)" }} />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <ButtonList />
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[252.5px] relative w-full">
        <Container110 />
        <Container112 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 py-[60px] right-0 top-[1264px]" data-name="Section">
      <Container109 />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container138 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container140 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container142 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container144 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container146 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container148 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-0 top-0" data-name="Container">
      <Container137 />
      <Container139 />
      <Container141 />
      <Container143 />
      <Container145 />
      <Container147 />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container151 />
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container153 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container155 />
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container157 />
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container159 />
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container161 />
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[1560.88px] top-0" data-name="Container">
      <Container150 />
      <Container152 />
      <Container154 />
      <Container156 />
      <Container158 />
      <Container160 />
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container164 />
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container166 />
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container168 />
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container170 />
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container172 />
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container174 />
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[3121.75px] top-0" data-name="Container">
      <Container163 />
      <Container165 />
      <Container167 />
      <Container169 />
      <Container171 />
      <Container173 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container177 />
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container179 />
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container181 />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container183 />
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container185 />
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container187 />
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[4682.63px] top-0" data-name="Container">
      <Container176 />
      <Container178 />
      <Container180 />
      <Container182 />
      <Container184 />
      <Container186 />
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container190 />
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container192 />
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container194 />
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container196 />
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container198 />
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container200 />
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[6243.5px] top-0" data-name="Container">
      <Container189 />
      <Container191 />
      <Container193 />
      <Container195 />
      <Container197 />
      <Container199 />
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container203 />
    </div>
  );
}

function Container205() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container204() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container205 />
    </div>
  );
}

function Container207() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container207 />
    </div>
  );
}

function Container209() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container208() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container209 />
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container211 />
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container213 />
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[7804.38px] top-0" data-name="Container">
      <Container202 />
      <Container204 />
      <Container206 />
      <Container208 />
      <Container210 />
      <Container212 />
    </div>
  );
}

function Container216() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container216 />
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container218 />
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container220 />
    </div>
  );
}

function Container222() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container222 />
    </div>
  );
}

function Container224() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container224 />
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container225() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container226 />
    </div>
  );
}

function Container214() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[9365.25px] top-0" data-name="Container">
      <Container215 />
      <Container217 />
      <Container219 />
      <Container221 />
      <Container223 />
      <Container225 />
    </div>
  );
}

function Container229() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container228() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container229 />
    </div>
  );
}

function Container231() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container231 />
    </div>
  );
}

function Container233() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container233 />
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container234() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container235 />
    </div>
  );
}

function Container237() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container236() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container237 />
    </div>
  );
}

function Container239() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container238() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container239 />
    </div>
  );
}

function Container227() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[10926.13px] top-0" data-name="Container">
      <Container228 />
      <Container230 />
      <Container232 />
      <Container234 />
      <Container236 />
      <Container238 />
    </div>
  );
}

function Container242() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container241() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container242 />
    </div>
  );
}

function Container244() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container243() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container244 />
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container245() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container246 />
    </div>
  );
}

function Container248() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container247() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container248 />
    </div>
  );
}

function Container250() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container249() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container250 />
    </div>
  );
}

function Container252() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container252 />
    </div>
  );
}

function Container240() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[12487px] top-0" data-name="Container">
      <Container241 />
      <Container243 />
      <Container245 />
      <Container247 />
      <Container249 />
      <Container251 />
    </div>
  );
}

function Container255() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container254() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container255 />
    </div>
  );
}

function Container257() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container257 />
    </div>
  );
}

function Container259() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container258() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container259 />
    </div>
  );
}

function Container261() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container260() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container261 />
    </div>
  );
}

function Container263() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container263 />
    </div>
  );
}

function Container265() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container264() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container265 />
    </div>
  );
}

function Container253() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[14047.88px] top-0" data-name="Container">
      <Container254 />
      <Container256 />
      <Container258 />
      <Container260 />
      <Container262 />
      <Container264 />
    </div>
  );
}

function Container268() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container268 />
    </div>
  );
}

function Container270() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container269() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container270 />
    </div>
  );
}

function Container272() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container271() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container272 />
    </div>
  );
}

function Container274() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Fast Delivery</p>
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container274 />
    </div>
  );
}

function Container276() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">30 Days Free Returns</p>
      </div>
    </div>
  );
}

function Container275() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container276 />
    </div>
  );
}

function Container278() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[32px]">Secure Payment</p>
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="content-stretch flex h-full items-center px-[40px] relative shrink-0" data-name="Container">
      <Container278 />
    </div>
  );
}

function Container266() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-[15608.75px] top-0" data-name="Container">
      <Container267 />
      <Container269 />
      <Container271 />
      <Container273 />
      <Container275 />
      <Container277 />
    </div>
  );
}

function ScrollingPromotion() {
  return (
    <div className="h-[32px] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="scrolling-promotion">
      <Container136 />
      <Container149 />
      <Container162 />
      <Container175 />
      <Container188 />
      <Container201 />
      <Container214 />
      <Container227 />
      <Container240 />
      <Container253 />
      <Container266 />
    </div>
  );
}

function Background18() {
  return (
    <div className="absolute bg-[#ffe093] content-stretch flex flex-col items-start left-0 py-[16px] right-0 top-[1506px]" data-name="Background">
      <ScrollingPromotion />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[1570px] left-0 right-0 top-[197px]" data-name="Main">
      <NavigationBreadcrumbs />
      <MaskGroup />
      <Section />
      <Container35 />
      <Section1 />
      <Section2 />
      <Background18 />
    </div>
  );
}

function MotionElementSvg() {
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

function Container280() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg />
    </div>
  );
}

function Container283() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">Mon-Sat, 9am-6pm EST.</p>
      </div>
    </div>
  );
}

function Container282() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container283 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container282 />
    </div>
  );
}

function Container281() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Customer Service</p>
      </div>
      <Margin15 />
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container280 />
      <Container281 />
    </div>
  );
}

function Container279() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background19 />
      <div className="absolute bottom-0 right-[-25px] top-0 w-[0.8px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MotionElementSvg1() {
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

function Container285() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg1 />
    </div>
  );
}

function Container288() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">+1 888-234-1234 (tool-free)</p>
      </div>
    </div>
  );
}

function Container287() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container288 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container287 />
    </div>
  );
}

function Container286() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Call Us</p>
      </div>
      <Margin16 />
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container285 />
      <Container286 />
    </div>
  );
}

function Container284() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background20 />
      <div className="absolute bottom-0 right-[-25px] top-0 w-[0.8px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MotionElementSvg2() {
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

function Container290() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg2 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="decoration-solid leading-[24px] underline">touch@masonstore.com</p>
      </div>
    </div>
  );
}

function Container293() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container292() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container293 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container292 />
    </div>
  );
}

function Container291() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Get in Touch</p>
      </div>
      <Margin17 />
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container290 />
      <Container291 />
    </div>
  );
}

function Container289() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background21 />
      <div className="absolute bottom-0 right-[-25px] top-0 w-[0.8px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MotionElementSvg3() {
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

function Container294() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[32px]" data-name="Container">
      <MotionElementSvg3 />
    </div>
  );
}

function Container297() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">382 NE 191st St # 87394 Miami</p>
      </div>
    </div>
  );
}

function Container296() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container297 />
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container296 />
    </div>
  );
}

function Container295() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Address</p>
      </div>
      <Margin18 />
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Background">
      <Container294 />
      <Container295 />
    </div>
  );
}

function MulticolumnIcon() {
  return (
    <div className="content-stretch flex gap-[50px] items-start justify-center min-h-[52px] relative shrink-0 w-full" data-name="multicolumn-icon">
      <Container279 />
      <Container284 />
      <Container289 />
      <Background22 />
    </div>
  );
}

function SectionSectionsFooterGroup() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[252.5px] py-[32px] right-0 top-[1767px]" data-name="Section - sections: footer-group">
      <MulticolumnIcon />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[250px] relative shrink-0 w-[250px]" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[32px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Find one of our</p>
        <p>11 stores nearest you.</p>
      </div>
    </div>
  );
}

function Container303() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading11 />
    </div>
  );
}

function Container305() {
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

function Link2() {
  return (
    <div className="bg-black max-w-[728.75px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-[9px] relative rounded-[inherit]">
        <Container305 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container304() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Container302() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container303 />
      <Container304 />
    </div>
  );
}

function Container301() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container302 />
    </div>
  );
}

function Container300() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[728.75px]" data-name="Container">
      <Container301 />
    </div>
  );
}

function Heading12() {
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

function SlotSummary5() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading12 />
    </div>
  );
}

function Link3() {
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
      <Link3 />
    </div>
  );
}

function Details5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary5 />
      <SlotListItem />
    </div>
  );
}

function Container306() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details5 />
    </div>
  );
}

function Heading13() {
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

function SlotSummary6() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading13 />
    </div>
  );
}

function Link4() {
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
      <Link4 />
    </div>
  );
}

function Details6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary6 />
      <SlotListItem1 />
    </div>
  );
}

function Container307() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details6 />
    </div>
  );
}

function Heading14() {
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

function SlotSummary7() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading14 />
    </div>
  );
}

function Link5() {
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
      <Link5 />
    </div>
  );
}

function Details7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary7 />
      <SlotListItem2 />
    </div>
  );
}

function Container308() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details7 />
    </div>
  );
}

function Container299() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_30px] items-start relative shrink-0 w-[1415px]" data-name="Container">
      <Container300 />
      <Container306 />
      <Container307 />
      <Container308 />
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

function Background23() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 size-[20px]" data-name="Background">
      <EeSvgFill />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

function Svg37() {
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
      <Background23 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Estonia (EUR €)</p>
      </div>
      <Svg37 />
    </div>
  );
}

function Container313() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.2px] relative shrink-0" data-name="Container">
      <LocalizationFormFormButton />
    </div>
  );
}

function Container312() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container313 />
    </div>
  );
}

function Container311() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0" data-name="Container">
      <Container312 />
    </div>
  );
}

function Container310() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container311 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">NANAILS.EU</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Powered by Shopify</p>
      </div>
    </div>
  );
}

function Container315() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{`© 2026 `}</p>
      </div>
      <Link6 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{`. `}</p>
      </div>
      <Link7 />
    </div>
  );
}

function Container314() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container315 />
    </div>
  );
}

function Container309() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[31.6px] items-start pt-[40px] px-[252.5px] relative w-full">
        <Container310 />
        <Container314 />
      </div>
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex flex-col items-center py-[40px] relative shrink-0 w-full" data-name="Container">
      <Container299 />
      <Container309 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 right-0 top-[1883px]" data-name="Footer">
      <div className="h-[0.8px] relative shrink-0 w-[1415px]" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      </div>
      <Container298 />
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

function Link8() {
  return (
    <div className="content-stretch flex items-start max-w-[65px] relative shrink-0" data-name="Link">
      <NanailsEu />
    </div>
  );
}

function Container317() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[65px]" data-name="Container">
      <Link8 />
    </div>
  );
}

function Container320() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[54px] top-[14.4px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.5)] whitespace-nowrap">
        <p className="leading-[normal]">What are you looking for?</p>
      </div>
    </div>
  );
}

function Container322() {
  return <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px" data-name="Container" />;
}

function Container321() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] pr-[4px] right-[50px] top-0" data-name="Container">
      <Container322 />
    </div>
  );
}

function ComboboxListbox() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px overflow-clip relative rounded-[100px]" data-name="Combobox listbox">
      <Container320 />
      <Container321 />
    </div>
  );
}

function Container323() {
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
      <Container323 />
    </div>
  );
}

function Svg38() {
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
      <Svg38 />
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

function Container319() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Search />
    </div>
  );
}

function PredictiveSearch() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[630px] min-h-px min-w-[630px] relative" data-name="predictive-search">
      <Container319 />
    </div>
  );
}

function Container318() {
  return (
    <div className="content-stretch flex items-center justify-center px-[18px] relative shrink-0 w-[666px]" data-name="Container">
      <PredictiveSearch />
    </div>
  );
}

function Svg39() {
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

function Container326() {
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
      <Svg39 />
      <Container326 />
    </div>
  );
}

function Svg40() {
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

function Link9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Link">
      <Svg40 />
      <Component3Items />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pr-[6px] relative shrink-0 w-[54px]" data-name="Link:margin">
      <Link9 />
    </div>
  );
}

function Container325() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative self-stretch shrink-0" data-name="Container">
      <LinkAccount />
      <LinkMargin />
    </div>
  );
}

function Container324() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[660px]" data-name="Container">
      <Container325 />
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#ff9b54] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[252.5px] py-[10px] relative w-full">
          <Container317 />
          <Container318 />
          <Container324 />
        </div>
      </div>
    </div>
  );
}

function Container328() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container328 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link10 />
    </div>
  );
}

function Container329() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Catalog</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container329 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link11 />
    </div>
  );
}

function Container330() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container330 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link12 />
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

function Container327() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Container">
      <NavigationPrimaryList />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white relative shadow-[0px_4px_18px_0px_rgba(0,0,0,0.1)] shrink-0 w-full z-[1]" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col items-start pl-[236.5px] pr-[252.5px] relative w-full">
        <Container327 />
        <div className="absolute bg-white inset-0" data-name="Background" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Header">
      <Background24 />
      <BackgroundShadow />
    </div>
  );
}

function Container316() {
  return (
    <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="Container">
      <Header />
    </div>
  );
}

function Container333() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">✌🏼 Free Express Shipping on orders $120!</p>
      </div>
    </div>
  );
}

function Container332() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-[458.33px]" data-name="Container">
      <Container333 />
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

function Background25() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-72.93px)] rounded-[10px] size-[20px] top-1/2" data-name="Background">
      <EeSvgFill1 />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

function Svg41() {
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
      <Background25 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[calc(50%+4.19px)] text-[15px] text-black text-center top-[calc(50%-0.7px)] w-[118.233px]">
        <p className="leading-[15px] whitespace-pre-wrap">Estonia (EUR €)</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+76.93px)] size-[12px] top-1/2">
        <div className="flex-none rotate-180">
          <Svg41 />
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

function Container336() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <LocalizationForm />
    </div>
  );
}

function Container335() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container336 />
    </div>
  );
}

function Container334() {
  return (
    <div className="content-center flex flex-wrap items-center justify-end relative shrink-0 w-[458.34px]" data-name="Container">
      <Container335 />
    </div>
  );
}

function Container331() {
  return (
    <div className="content-stretch flex gap-[498.33px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container332 />
      <Container334 />
    </div>
  );
}

function SectionsHeaderGroup() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[252.5px] py-[12px] right-0 top-0" data-name="sections: header-group">
      <Container331 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[2245px] left-0 right-0 top-0" data-name="Container">
      <Main />
      <SectionSectionsFooterGroup />
      <Footer />
      <div className="absolute h-[2197px] inset-[48px_0_0_0] pointer-events-none">
        <Container316 />
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