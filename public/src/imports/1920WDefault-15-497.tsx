import svgPaths from "./svg-ljtf40lead";
import imgLinkGelPolishHolyMollyPantone1111MlMotionElement from "figma:asset/845f521bf9b9c5f5237256480183f6bf7c541dbe.png";
import imgLinkGelPolishHolyMollyPantone1011MlMotionElement from "figma:asset/12315c22a26e7ef389758f785bb8655d0750f39b.png";
import imgLinkGelPolishHolyMollyPantone911MlMotionElement from "figma:asset/7782f6519c7497135102c7950464d4ee116b1e3d.png";
import imgLinkGelPolishHolyMollyPantone811MlMotionElement from "figma:asset/1b49202eb1555df77eb03fa251584457d575f99d.png";
import imgNanailsEu from "figma:asset/130f8557bbf2bade2e7c9765c5990b889e61aacc.png";

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

function Heading1MotionElement() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1 → motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[42px]">Search results</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[44px] whitespace-pre-wrap">holy</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[4px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function ComboboxListbox() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[100px]" data-name="Combobox listbox">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[25.6px] pr-[51.6px] py-[1.6px] relative w-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[30px]">Clear</p>
      </div>
    </div>
  );
}

function ButtonClearSearchTerm() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center right-[15.28px] rounded-[100px] top-[-0.4px]" data-name="Button - Clear search term">
      <Container10 />
    </div>
  );
}

function Svg1() {
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
    <div className="absolute content-stretch flex items-center justify-center opacity-0 right-[16px] top-[11.6px]" data-name="Button - Search">
      <Svg1 />
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

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Search />
    </div>
  );
}

function PredictiveSearch() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[650px] min-w-[600px] relative shrink-0 w-[650px]" data-name="predictive-search">
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <PredictiveSearch />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[252.5px] right-[252.5px] top-[36px]" data-name="Container">
      <Heading1MotionElement />
      <Container5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Availability</p>
      </div>
    </div>
  );
}

function Svg2() {
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
        <Container14 />
        <Svg2 />
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Details">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <SlotSummary />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Price</p>
      </div>
    </div>
  );
}

function Svg3() {
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
        <Container15 />
        <Svg3 />
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Details">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <SlotSummary1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Capacities</p>
      </div>
    </div>
  );
}

function Svg4() {
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
        <Container16 />
        <Svg4 />
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Details">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <SlotSummary2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Brand</p>
      </div>
    </div>
  );
}

function Svg5() {
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
        <Container17 />
        <Svg5 />
      </div>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Details">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <SlotSummary3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[26px]">Category</p>
      </div>
    </div>
  );
}

function Svg6() {
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
      <Container18 />
      <Svg6 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[259px] relative shrink-0 w-[259px]" data-name="Form">
      <Details />
      <Details1 />
      <Details2 />
      <Details3 />
      <DetailsSlotSummary />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0" data-name="Container">
      <Form />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[30px] relative self-stretch shrink-0 z-[2]" data-name="Container">
      <Container13 />
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

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[10px] max-w-[1920px] overflow-clip rounded-[24px] size-[48px] top-[10px]" data-name="Button">
      <Frame />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Add to cart</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Container26 />
    </div>
  );
}

function ButtonAddToCart() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px opacity-0 relative rounded-[100px]" data-name="Button - Add to cart">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container25 />
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

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <LinkGelPolishHolyMollyPantone1111MlMotionElement />
      <Button />
      <Form1 />
    </div>
  );
}

function Heading3Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Gel Polish Holy Molly Pantone 11</p>
        <p>11ml</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading3Link />
      <Container28 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container27 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container22 />
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

function Frame1() {
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

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[10px] max-w-[1920px] overflow-clip rounded-[24px] size-[48px] top-[10px]" data-name="Button">
      <Frame1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Add to cart</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function ButtonAddToCart1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px opacity-0 relative rounded-[100px]" data-name="Button - Add to cart">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container34 />
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

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <LinkGelPolishHolyMollyPantone1011MlMotionElement />
      <Button1 />
      <Form2 />
    </div>
  );
}

function Heading3Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[0px] text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Gel Polish Holy Molly Pantone 10</p>
        <p>11ml</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading3Link1 />
      <Container37 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container36 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container31 />
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

function Frame2() {
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
      <Frame2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Add to cart</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Container44 />
    </div>
  );
}

function ButtonAddToCart2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px opacity-0 relative rounded-[100px]" data-name="Button - Add to cart">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container43 />
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

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <LinkGelPolishHolyMollyPantone911MlMotionElement />
      <Button2 />
      <Form3 />
    </div>
  );
}

function Heading3Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Gel Polish Holy Molly Pantone 9</p>
        <p>11ml</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading3Link2 />
      <Container46 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container45 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container40 />
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

function Frame3() {
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
      <Frame3 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Add to cart</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Container53 />
    </div>
  );
}

function ButtonAddToCart3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px opacity-0 relative rounded-[100px]" data-name="Button - Add to cart">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] relative size-full">
          <Container52 />
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

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <LinkGelPolishHolyMollyPantone811MlMotionElement />
      <Button3 />
      <Form4 />
    </div>
  );
}

function Heading3Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Gel Polish Holy Molly Pantone 8</p>
        <p>11ml</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">€7,00</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[3.3px] items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading3Link3 />
      <Container55 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container54 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[30px] h-[344.44px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container30 />
      <Container39 />
      <Container48 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch z-[1]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[349.2px] isolate items-start left-[252.5px] right-[252.5px] top-[283.2px]" data-name="Container">
      <Container12 />
      <Container19 />
    </div>
  );
}

function Svg7() {
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

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[30px]">Filter</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[inherit]">
        <Svg7 />
        <Container61 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[48px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[16.8px] py-px relative rounded-[inherit]">
        <Container60 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">4 results</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container59 />
      <Container62 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Sort by:</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pr-[52.55px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
          <p className="leading-[46px]">Relevance</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center pl-[20.8px] pr-[36.8px] py-px relative rounded-[100px] shrink-0" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Container66 />
    </div>
  );
}

function Svg8() {
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

function Container65() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Options />
      <Svg8 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-name="Container">
      <Label />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">View as:</p>
      </div>
    </div>
  );
}

function Svg9() {
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

function Container68() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <Svg9 />
      </div>
    </div>
  );
}

function ButtonViewAsGrid() {
  return (
    <div className="bg-black relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - View as grid">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="absolute bg-black bottom-[-0.2px] left-[-0.2px] rounded-[23.95px] top-[-0.2px] w-[47.4px]" data-name="Background" />
        <Container68 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Svg10() {
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

function Container69() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <Svg10 />
      </div>
    </div>
  );
}

function ButtonViewAsList() {
  return (
    <div className="relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - View as list">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container69 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function LayoutSwitcher() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="layout-switcher">
      <Container67 />
      <ButtonViewAsGrid />
      <ButtonViewAsList />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[32.01px] items-center relative shrink-0" data-name="Container">
      <Container64 />
      <LayoutSwitcher />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-center flex flex-wrap items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Background">
      <Container58 />
      <Container63 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] pointer-events-auto sticky top-0" data-name="Container">
      <Background1 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-white h-[668.4px] left-0 right-0 top-[197px]" data-name="Main">
      <Container4 />
      <Container11 />
      <div className="absolute h-[469.2000244140625px] inset-[199.2px_252.5px_0_252.5px] pointer-events-none">
        <Container57 />
      </div>
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

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">Mon-Sat, 9am-6pm EST.</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container73 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Customer Service</p>
      </div>
      <Margin />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background2 />
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

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg1 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">+1 888-234-1234 (tool-free)</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[195px]" data-name="Container">
      <Container79 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container78 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Call Us</p>
      </div>
      <Margin1 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background3 />
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

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[28px]" data-name="Container">
      <MotionElementSvg2 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="decoration-solid leading-[24px] underline">touch@masonstore.com</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[185px]" data-name="Container">
      <Container84 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container83 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Get in Touch</p>
      </div>
      <Margin2 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative w-full" data-name="Background">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background4 />
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

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[316.25px] relative shrink-0 w-[32px]" data-name="Container">
      <MotionElementSvg3 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">382 NE 191st St # 87394 Miami</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[225px]" data-name="Container">
      <Container88 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container87 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[24px]">Address</p>
      </div>
      <Margin3 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Background">
      <Container85 />
      <Container86 />
    </div>
  );
}

function MulticolumnIcon() {
  return (
    <div className="content-stretch flex gap-[50px] h-[52px] items-start justify-center min-h-[52px] relative shrink-0 w-full" data-name="multicolumn-icon">
      <Container70 />
      <Container75 />
      <Container80 />
      <Background5 />
    </div>
  );
}

function SectionSectionsFooterGroup() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[252.5px] py-[32px] right-0 top-[865.4px]" data-name="Section - sections: footer-group">
      <MulticolumnIcon />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[250px] relative shrink-0 w-[250px]" data-name="Heading 3">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[32px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Find one of our</p>
        <p>11 stores nearest you.</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Container96() {
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

function Link1() {
  return (
    <div className="bg-black max-w-[728.75px] opacity-50 relative rounded-[100px] shrink-0" data-name="Link">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[32.8px] py-[9px] relative rounded-[inherit]">
        <Container96 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex h-[136px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container93 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[728.75px]" data-name="Container">
      <Container92 />
    </div>
  );
}

function Heading1() {
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

function SlotSummary4() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading1 />
    </div>
  );
}

function Link2() {
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
      <Link2 />
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <SlotSummary4 />
      <SlotListItem />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details4 />
    </div>
  );
}

function Heading2() {
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

function SlotSummary5() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading2 />
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

function SlotListItem1() {
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
      <SlotListItem1 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details5 />
    </div>
  );
}

function Heading3() {
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

function SlotSummary6() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] relative shrink-0 w-full" data-name="Slot → Summary">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading3 />
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

function SlotListItem2() {
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
      <SlotListItem2 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[198.75px]" data-name="Container">
      <Details6 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_30px] h-[136px] items-start relative shrink-0 w-[1415px]" data-name="Container">
      <Container91 />
      <Container97 />
      <Container98 />
      <Container99 />
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

function Background6() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 size-[20px]" data-name="Background">
      <EeSvgFill />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

function Svg11() {
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
      <Background6 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Estonia (EUR €)</p>
      </div>
      <Svg11 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.2px] relative shrink-0" data-name="Container">
      <LocalizationFormFormButton />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container104 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-[166px]" data-name="Container">
      <Container103 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container102 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">NANAILS.EU</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Powered by Shopify</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{`© 2026 `}</p>
      </div>
      <Link5 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{`. `}</p>
      </div>
      <Link6 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container106 />
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[31.6px] items-start pt-[40px] px-[252.5px] relative w-full">
        <Container101 />
        <Container105 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-center py-[40px] relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Container100 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 right-0 top-[981.4px]" data-name="Footer">
      <div className="h-[0.8px] relative shrink-0 w-[1415px]" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      </div>
      <Container89 />
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

function Link7() {
  return (
    <div className="content-stretch flex h-[73px] items-start max-w-[65px] relative shrink-0" data-name="Link">
      <NanailsEu />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[65px]" data-name="Container">
      <Link7 />
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[54px] top-[14.4px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.5)] whitespace-nowrap">
        <p className="leading-[normal]">What are you looking for?</p>
      </div>
    </div>
  );
}

function Container113() {
  return <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px" data-name="Container" />;
}

function Container112() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] pr-[4px] right-[50px] top-0" data-name="Container">
      <Container113 />
    </div>
  );
}

function ComboboxListbox1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px overflow-clip relative rounded-[100px]" data-name="Combobox listbox">
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e9e9e9] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[30px]">Clear</p>
      </div>
    </div>
  );
}

function ButtonClearSearchTerm1() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center opacity-0 right-[15.27px] rounded-[100px] top-0" data-name="Button - Clear search term">
      <Container114 />
    </div>
  );
}

function Svg12() {
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

function ButtonSearch1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center right-[16px] top-[12px]" data-name="Button - Search">
      <Svg12 />
    </div>
  );
}

function Search1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Search">
      <ComboboxListbox1 />
      <ButtonClearSearchTerm1 />
      <ButtonSearch1 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Search1 />
    </div>
  );
}

function PredictiveSearch1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[630px] min-h-px min-w-[630px] relative" data-name="predictive-search">
      <Container110 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex items-center justify-center px-[18px] relative shrink-0 w-[666px]" data-name="Container">
      <PredictiveSearch1 />
    </div>
  );
}

function Svg13() {
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

function Container117() {
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
      <Svg13 />
      <Container117 />
    </div>
  );
}

function Svg14() {
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

function Link8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Link">
      <Svg14 />
      <Component3Items />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pr-[6px] relative shrink-0 w-[54px]" data-name="Link:margin">
      <Link8 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative self-stretch shrink-0" data-name="Container">
      <LinkAccount />
      <LinkMargin />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-end relative shrink-0 w-[660px]" data-name="Container">
      <Container116 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#ff9b54] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[252.5px] py-[10px] relative w-full">
          <Container108 />
          <Container109 />
          <Container115 />
        </div>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex h-[32px] items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container119 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link9 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Catalog</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex h-[32px] items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container120 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link10 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex h-[32px] items-start px-[16px] py-[4px] relative shrink-0" data-name="Link">
      <Container121 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Item">
      <Link11 />
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

function Container118() {
  return (
    <div className="content-stretch flex h-[56px] items-start py-[12px] relative shrink-0 w-full" data-name="Container">
      <NavigationPrimaryList />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[1]" data-name="Background">
      <div className="content-stretch flex flex-col items-start pl-[236.5px] pr-[252.5px] relative w-full">
        <Container118 />
        <div className="absolute bg-white inset-0" data-name="Background" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Header">
      <Background7 />
      <Background8 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="Container">
      <Header />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[24px]">✌🏼 Free Express Shipping on orders $120!</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-[458.33px]" data-name="Container">
      <Container124 />
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

function Background9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-72.93px)] rounded-[10px] size-[20px] top-1/2" data-name="Background">
      <EeSvgFill1 />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" data-name="Overlay+Shadow">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

function Svg15() {
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
      <Background9 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[calc(50%+4.19px)] text-[15px] text-black text-center top-[calc(50%-0.7px)] w-[118.233px]">
        <p className="leading-[15px] whitespace-pre-wrap">Estonia (EUR €)</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+76.93px)] size-[12px] top-1/2">
        <div className="flex-none rotate-180">
          <Svg15 />
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

function Container127() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0" data-name="Container">
      <LocalizationForm />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container127 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-center flex flex-wrap items-center justify-end relative shrink-0 w-[458.34px]" data-name="Container">
      <Container126 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex gap-[498.33px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container123 />
      <Container125 />
    </div>
  );
}

function SectionsHeaderGroup() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[252.5px] py-[12px] right-0 top-0" data-name="sections: header-group">
      <Container122 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[1343.4px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <Main />
      <SectionSectionsFooterGroup />
      <Footer />
      <div className="absolute h-[1295.4000244140625px] inset-[48px_0_0_0] pointer-events-none">
        <Container107 />
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