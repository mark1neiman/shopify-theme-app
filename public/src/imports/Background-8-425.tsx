import svgPaths from "./svg-u1b2wcvrmc";
import imgPantone9ScaledJpg from "figma:asset/5fbcedfe6fa636b10882210e37c6764f801f80a5.png";
import imgGelPolishHolyMollyPantone811MlWebp from "figma:asset/69ddf0f2b0c2f6734304a58aa6d8e213565ac486.png";
import imgImageBackground from "figma:asset/ce90dbdb06ca5f03daf21c9064acb1b150689521.png";
import imgSmartposti from "figma:asset/057cebd5573e775ff570e8e1bf327f206efe98c5.png";
import { imgLinkGelPolishHolyMollyPantone911Ml, imgLinkGelPolishHolyMollyPantone811Ml } from "./svg-e1irw";

function Component4Items() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[0.8px] relative self-stretch shrink-0" data-name="4 items">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">(4)</p>
      </div>
    </div>
  );
}

function MotionElement() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="motion-element">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[48px]">Your cart</p>
      </div>
      <Component4Items />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <MotionElement />
    </div>
  );
}

function ShippingDestination() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[12.8px] py-[8.8px] relative rounded-[999px] shrink-0" data-name="Shipping destination">
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">
        <p className="leading-[16.8px]">Ship to Estonia</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-center flex flex-wrap items-center justify-between left-[316.5px] right-[316.5px] top-0" data-name="Container">
      <Heading />
      <ShippingDestination />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#20262d] text-[0px] w-full">
          <p className="text-[15px] whitespace-pre-wrap">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px]">{`Spend `}</span>
            <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px]">€93,40</span>
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px]">{` more to reach free shipping!`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#d9dee3] h-[8px] relative rounded-[30px] shrink-0 w-full" data-name="progress-bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#ff9b54] inset-[0_78.33%_0_0] rounded-[30px]" data-name="Background" />
      </div>
    </div>
  );
}

function FreeShippingGoal() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[8px] items-start left-[316.5px] px-[14.8px] py-[12.8px] right-[316.5px] rounded-[14px] top-[70px]" data-name="free-shipping-goal">
      <div aria-hidden="true" className="absolute border border-[#e0e4e8] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container2 />
      <ProgressBar />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12.5 3.42331L3.5 12.5696" id="Vector" stroke="var(--stroke-0, #5F6975)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.5 12.5696L3.5 3.42331" id="Vector_2" stroke="var(--stroke-0, #5F6975)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <Svg />
    </div>
  );
}

function Pantone9ScaledJpg() {
  return (
    <div className="h-[115.78px] relative shrink-0 w-[120px]" data-name="pantone-9-scaled.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPantone9ScaledJpg} />
      </div>
    </div>
  );
}

function LinkGelPolishHolyMollyPantone911Ml() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[120px_115.78px] rounded-[10px] top-1/2" data-name="Link - Gel Polish Holy Molly Pantone 9 11ml" style={{ maskImage: `url('${imgLinkGelPolishHolyMollyPantone911Ml}')` }}>
      <Pantone9ScaledJpg />
    </div>
  );
}

function LinkGelPolishHolyMollyPantone911MlMaskGroup() {
  return (
    <div className="h-[115.78px] relative shrink-0 w-[120px]" data-name="Link - Gel Polish Holy Molly Pantone 9 11ml:mask-group">
      <LinkGelPolishHolyMollyPantone911Ml />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12181f] text-[18px] whitespace-nowrap">
        <p className="leading-[24.3px]">Gel Polish Holy Molly Pantone 9 11ml</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.1px] relative shrink-0" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-[341.43px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-center flex flex-wrap items-center justify-end pr-[287.27px] relative shrink-0 w-[341.43px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">FREE</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container4 />
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-[554.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative w-full">
        <Link />
        <LinkGelPolishHolyMollyPantone911MlMaskGroup />
        <Container3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function InputQuantityForGelPolishHolyMollyPantone911Ml() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[100px] self-stretch shadow-[0px_0px_0px_1px_#e5e5e5]" data-name="Input - Quantity for Gel Polish Holy Molly Pantone 9 11ml">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[35px] py-[9.8px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="SVG">
          <path d="M2.50833 8H11.4917" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDecreaseQuantityForGelPolishHolyMollyPantone911Ml() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-0 rounded-[100px] top-0 w-[35px]" data-name="Button - Decrease quantity for Gel Polish Holy Molly Pantone 9 11ml">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="SVG">
          <path d="M2.50833 8H11.4917" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d="M7 3.50833V12.4917" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIncreaseQuantityForGelPolishHolyMollyPantone911Ml() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center right-0 rounded-[100px] top-0 w-[35px]" data-name="Button - Increase quantity for Gel Polish Holy Molly Pantone 9 11ml">
      <Svg2 />
    </div>
  );
}

function QuantityInput() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-[38px] relative rounded-[999px] shrink-0 w-[90px]" data-name="quantity-input">
      <InputQuantityForGelPolishHolyMollyPantone911Ml />
      <ButtonDecreaseQuantityForGelPolishHolyMollyPantone911Ml />
      <ButtonIncreaseQuantityForGelPolishHolyMollyPantone911Ml />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <QuantityInput />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[137px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container8 />
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[141px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60.68px] pr-[8px] pt-[59.89px] relative w-full">
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
          <p className="leading-[24px]">FREE</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="mb-[-0.79px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[21px] items-center justify-center pl-px pt-[0.8px] relative w-full">
          <Data />
          <Data1 />
          <Data2 />
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12.5 3.42331L3.5 12.5696" id="Vector" stroke="var(--stroke-0, #5F6975)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.5 12.5696L3.5 3.42331" id="Vector_2" stroke="var(--stroke-0, #5F6975)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <Svg3 />
    </div>
  );
}

function GelPolishHolyMollyPantone811MlWebp() {
  return (
    <div className="h-[116px] relative shrink-0 w-[120px]" data-name="Gel-Polish-Holy-Molly-Pantone-8-11ml.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGelPolishHolyMollyPantone811MlWebp} />
      </div>
    </div>
  );
}

function LinkGelPolishHolyMollyPantone811Ml() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[120px_116px] rounded-[10px] top-1/2" data-name="Link - Gel Polish Holy Molly Pantone 8 11ml" style={{ maskImage: `url('${imgLinkGelPolishHolyMollyPantone811Ml}')` }}>
      <GelPolishHolyMollyPantone811MlWebp />
    </div>
  );
}

function LinkGelPolishHolyMollyPantone811MlMaskGroup() {
  return (
    <div className="h-[116px] relative shrink-0 w-[120px]" data-name="Link - Gel Polish Holy Molly Pantone 8 11ml:mask-group">
      <LinkGelPolishHolyMollyPantone811Ml />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12181f] text-[18px] whitespace-nowrap">
        <p className="leading-[24.3px]">Gel Polish Holy Molly Pantone 8 11ml</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.09px] relative shrink-0" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-[341.85px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p2a615a00} id="Vector" stroke="var(--stroke-0, #C4301C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86667" />
          <path d={svgPaths.p1c83bb80} fill="var(--fill-0, #C4301C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c4301c] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Off holly</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[rgba(196,48,28,0.1)] content-stretch flex gap-[8px] items-center px-[8px] py-[3.5px] relative rounded-[50px] self-stretch shrink-0" data-name="Item">
      <Svg4 />
      <Container18 />
    </div>
  );
}

function ListDiscount() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="List - Discount">
      <Item />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c4301c] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[24px]">€6,30</p>
      </div>
    </div>
  );
}

function Strikethrough() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Strikethrough">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[20px] text-right whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] line-through">€7,00</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Strikethrough />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[341.85px]" data-name="Container">
      <ListDiscount />
      <Container19 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container14 />
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[554.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative w-full">
        <Link2 />
        <LinkGelPolishHolyMollyPantone811MlMaskGroup />
        <Container13 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
    </div>
  );
}

function InputQuantityForGelPolishHolyMollyPantone811Ml() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[100px] self-stretch shadow-[0px_0px_0px_1px_#e5e5e5]" data-name="Input - Quantity for Gel Polish Holy Molly Pantone 8 11ml">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[35px] py-[9.8px] relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="SVG">
          <path d="M2.50833 8H11.4917" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDecreaseQuantityForGelPolishHolyMollyPantone811Ml() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-0 rounded-[100px] top-0 w-[35px]" data-name="Button - Decrease quantity for Gel Polish Holy Molly Pantone 8 11ml">
      <Svg5 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="SVG">
          <path d="M2.50833 8H11.4917" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d="M7 3.50833V12.4917" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIncreaseQuantityForGelPolishHolyMollyPantone811Ml() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center right-0 rounded-[100px] top-0 w-[35px]" data-name="Button - Increase quantity for Gel Polish Holy Molly Pantone 8 11ml">
      <Svg6 />
    </div>
  );
}

function QuantityInput1() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-[38px] relative rounded-[999px] shrink-0 w-[90px]" data-name="quantity-input">
      <InputQuantityForGelPolishHolyMollyPantone811Ml />
      <ButtonDecreaseQuantityForGelPolishHolyMollyPantone811Ml />
      <ButtonIncreaseQuantityForGelPolishHolyMollyPantone811Ml />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <QuantityInput1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container22 />
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[137px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container21 />
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[141px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60.8px] pr-[8px] pt-[60px] relative w-full">
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
          <p className="leading-[24px]">€12,60</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="mb-[-0.79px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[21px] items-center justify-center pl-px py-[0.8px] relative w-full">
          <Data3 />
          <Data4 />
          <Data5 />
        </div>
      </div>
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.79px] relative shrink-0 w-full" data-name="Table → Body">
      <Row />
      <Row1 />
    </div>
  );
}

function FormCartItems() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-[875.8px]" data-name="Form → cart-items">
      <TableBody />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(251,191,36,0.16)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(180,83,9,0.25)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[12.8px] py-[10.8px] relative w-full">
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[20.8px] relative shrink-0 text-[#92400e] text-[13px] whitespace-nowrap">
          <p className="mb-0">Using fallback delivery settings. Enable App Proxy to load saved</p>
          <p>config.</p>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12181f] text-[18px] tracking-[-0.18px] w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[21.6px] whitespace-pre-wrap">Promo code</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[0.8px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[13.2px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Enter promo code</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[10px]" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[13.85px] pt-[13.35px] px-[12.8px] relative w-full">
          <Container31 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center justify-center min-h-[44px] pb-[9.6px] pt-[8.4px] px-[18.8px] relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4b8f00] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2f6e00] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[30px]">Apply</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Input />
      <Button />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16.2px] whitespace-pre-wrap">One code per order. Discount is applied at checkout.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.1px] items-start relative w-full">
        <Container30 />
        <Container32 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#d9dee3] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[14.8px] relative w-full">
        <Heading1 />
        <Container29 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12181f] text-[18px] tracking-[-0.18px] w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[21.6px] whitespace-pre-wrap">Country</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[15px] w-full">
          <p className="leading-[30px] whitespace-pre-wrap">Estonia</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="opacity-65 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="capitalize flex flex-col font-['Montserrat:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[15px] whitespace-nowrap">
          <p className="leading-[30px]">▾</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[48px] min-h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[12.8px] py-[10.8px] relative size-full">
          <div className="h-[14px] relative rounded-[3px] shrink-0 w-[22px]" data-name="Image+Background">
            <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3px]">
              <div className="absolute bg-[#e9e9e9] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3px]" />
              <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[3px]">
                <img alt="" className="absolute h-full left-[-0.91%] max-w-none top-0 w-[101.82%]" src={imgImageBackground} />
              </div>
            </div>
          </div>
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#d9dee3] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[14.8px] relative w-full">
        <Heading2 />
        <Button1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12181f] text-[18px] tracking-[-0.18px] w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[21.6px] whitespace-pre-wrap">Please select a service provider</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#111827] relative rounded-[10px] shrink-0 size-[20px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#111827] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 rounded-[3px] size-[6px] top-1/2" data-name="Background" />
    </div>
  );
}

function InputMargin() {
  return (
    <div className="h-[22px] relative shrink-0 w-[20px]" data-name="Input:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <Input1 />
      </div>
    </div>
  );
}

function Smartposti() {
  return (
    <div className="h-[18.44px] max-w-[428.79998779296875px] relative shrink-0 w-[84px]" data-name="smartposti">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.04%] left-0 max-w-none top-[-0.02%] w-full" src={imgSmartposti} />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Smartposti parcel lockers</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Price: 3.99</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-[269.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.2px] items-start relative w-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#4b8f00] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[10px] items-start px-[12.8px] py-[10.8px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px] shadow-[0px_0px_0px_2px_rgba(75,143,0,0.1)]" data-name="Label:shadow" />
        <InputMargin />
        <Smartposti />
        <Container36 />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 size-[20px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#9ca3af] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 rounded-[3px] size-[6px] top-1/2" data-name="Background" />
    </div>
  );
}

function InputMargin1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[20px]" data-name="Input:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <Input2 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Flat rate delivery</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Price: 4.99</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-[128.89px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.2px] items-start relative w-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[10px] items-start px-[12.8px] py-[10.8px] relative w-full">
        <InputMargin1 />
        <Container39 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label />
        <Label1 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[23.41px] relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[22.4px] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">
        <p className="mb-0">Pickup</p>
        <p>point</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[15px] w-full">
          <p className="leading-[30px] whitespace-pre-wrap">Select pickup point…</p>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="opacity-65 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="capitalize flex flex-col font-['Montserrat:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[15px] whitespace-nowrap">
          <p className="leading-[30px]">▾</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-[44px] min-w-px relative rounded-[10px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center min-h-[inherit] px-[12.8px] py-[10.8px] relative size-full">
          <Container44 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Container43 />
        <Button2 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#d9dee3] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[14.8px] relative w-full">
        <Heading3 />
        <Container35 />
        <Container42 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12181f] text-[18px] tracking-[-0.18px] w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[21.6px] whitespace-pre-wrap">Recipient details</p>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13px] w-full">
        <p className="leading-[20.8px] whitespace-pre-wrap">Full name</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[18.9px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[8.8px] w-[91.25px]">
          <p className="leading-[18.9px] whitespace-pre-wrap">Mark Neiman1</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white min-h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[12.8px] py-[12.55px] relative w-full">
          <Container47 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative w-full">
        <Label2 />
        <Input3 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13px] w-full">
        <p className="leading-[20.8px] whitespace-pre-wrap">Address</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[18.9px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#111827] text-[13px] top-[8.8px] w-[78.82px]">
          <p className="leading-[18.9px] whitespace-pre-wrap">Kooli tn 6-28</p>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white min-h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[12.8px] py-[12.55px] relative w-full">
          <Container49 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative w-full">
        <Label3 />
        <Input4 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col h-[20.8px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13px] w-full">
        <p className="leading-[20.8px] whitespace-pre-wrap">City</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[18.9px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.3px] top-[8.8px] w-[56.26px]">
          <p className="leading-[18.9px] whitespace-pre-wrap">Tabasalu</p>
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white h-[44px] min-h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[12.8px] py-[12.55px] relative size-full">
          <Container52 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Label4 />
      <Input5 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col h-[20.8px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13px] w-full">
        <p className="leading-[20.8px] whitespace-pre-wrap">Postal code</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[18.9px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#111827] text-[12.4px] top-[8.8px] w-[43.81px]">
          <p className="leading-[18.9px] whitespace-pre-wrap">76-904</p>
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white h-[44px] min-h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[12.8px] py-[12.55px] relative size-full">
          <Container54 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Label5 />
      <Input6 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center relative w-full">
        <Container51 />
        <Container53 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col h-[20.8px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13px] w-full">
        <p className="leading-[20.8px] whitespace-pre-wrap">Code</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip py-[0.8px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[13.6px] w-full">
          <p className="leading-[16px] whitespace-pre-wrap">+372 (EE)</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white h-[44px] min-h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] pl-[16.8px] pr-[28.8px] py-[10.8px] relative size-full">
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center max-w-[140px] relative self-stretch shrink-0 w-[140px]" data-name="Container">
      <Label6 />
      <Options />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col h-[20.8px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13px] w-full">
        <p className="leading-[20.8px] whitespace-pre-wrap">Phone</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[18.9px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#111827] text-[13px] top-[8.8px] w-[62.51px]">
          <p className="leading-[18.9px] whitespace-pre-wrap">55988931</p>
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white h-[44px] min-h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[12.8px] py-[12.55px] relative size-full">
          <Container59 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative self-stretch shrink-0 w-[209.4px]" data-name="Container">
      <Label7 />
      <Input7 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[79.4px] items-start justify-center relative w-full">
        <Container56 />
        <Container58 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13px] w-full">
        <p className="leading-[20.8px] whitespace-pre-wrap">Email</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[18.9px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.5px] top-[8.8px] w-[163.03px]">
          <p className="leading-[18.9px] whitespace-pre-wrap">mark1neiman@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white min-h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[12.8px] py-[12.55px] relative w-full">
          <Container61 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd6dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative w-full">
        <Label8 />
        <Input8 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#d9dee3] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[14.8px] relative w-full">
        <Heading4 />
        <Container46 />
        <Container48 />
        <Container50 />
        <Container55 />
        <Container60 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#4b8f00] h-[50px] min-h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4b8f00] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-h-[inherit] pb-[10.6px] pt-[9.4px] px-[32.8px] relative size-full">
          <div className="capitalize flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
            <p className="leading-[30px]">Proceed to checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[16.2px] whitespace-pre-wrap">You will be redirected to invoice checkout.</p>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#d9dee3] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[9.1px] items-start p-[14.8px] relative w-full">
        <Button3 />
        <Container62 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorder />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold items-baseline justify-between leading-[0] relative text-[#111827] w-full whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[18px] tracking-[-0.18px]">
          <p className="leading-[21.6px]">Estimated total</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[34px] tracking-[-0.68px]">
          <p className="leading-[34px]">€26,60</p>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[18.2px]">Subtotal</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111827] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">€26,60</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <Container65 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.2px] relative w-full">
        <Container64 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[16.8px] whitespace-pre-wrap">Tax included and shipping calculated at checkout</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#d9dee3] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16.8px] relative w-full">
        <Paragraph />
        <Container63 />
        <Container67 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <BackgroundBorder1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="shrink-0 sticky top-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container27 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[20.8px] relative rounded-[16px] shrink-0 w-[500px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#d9dee3] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container26 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[1px] bg-[rgba(255,255,255,0.65)] content-stretch flex flex-col inset-0 items-center opacity-0 py-[674.55px]" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] opacity-75 relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[19.2px]">Updating…</p>
      </div>
    </div>
  );
}

function MainCart() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start justify-center left-[316.5px] right-[316.5px] top-[149.6px]" data-name="main-cart">
      <FormCartItems />
      <BackgroundBorder />
      <OverlayOverlayBlur />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1518.7px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <FreeShippingGoal />
      <MainCart />
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col items-start pb-[60px] pt-[16px] relative size-full" data-name="Background">
      <Container />
    </div>
  );
}