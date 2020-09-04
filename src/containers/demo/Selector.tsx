import clsx from "clsx";
import React, { Dispatch, SetStateAction, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import styled from "styled-components";
import { Image } from "./image";
import { DemoItem } from "./Layout";
import { PreviewData } from "./Preview";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2em;
`;

const CaretSpacer = styled(BiChevronRight)`
  margin: 0 1em;
`;

const Button = styled.button`
  width: 12em;
  max-width: 100%;

  margin: 0 2em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const DropdownItem = styled.span`
  cursor: pointer;
`;

const Header: React.FC = () => (
  <>
    <h1>Interactive Demo</h1>
    <p>
      Select an image and then one of the available generated formats to see the results for
      yourself. Some basic information is shown, such as the resolution and file-size reduction
      compared to the original.
    </p>
  </>
);

const Footer: React.FC = () => (
  <p>These images were generated using a custom pipeline and the IPP webpack loader.</p>
);

const DropdownButton: React.FC<{
  disabled?: boolean;
  items: Array<{ text: string; key: string; onClick: () => void; selected?: boolean }>;
}> = ({ children, disabled, items }) => (
  <div className={clsx("dropdown", { "dropdown--hoverable": !disabled })}>
    <Button className={clsx("button button--secondary", { disabled })} data-toggle="dropdown">
      {children}
    </Button>

    <ul className="dropdown__menu">
      {items.map((item) => (
        <li key={item.key}>
          <DropdownItem
            className={clsx("dropdown__link", item.selected && "dropdown__link--active")}
            onClick={item.onClick}
          >
            {item.text}
          </DropdownItem>
        </li>
      ))}
    </ul>
  </div>
);
export const Selector: React.FC<{
  images: Image[];
  preview?: PreviewData;
  setPreview: Dispatch<SetStateAction<PreviewData | undefined>>;
}> = ({ images, preview, setPreview }) => {
  const [selectedImage, setSelectedImage] = useState<Image>();

  return (
    <DemoItem>
      <Header />

      <ButtonWrapper>
        <DropdownButton
          items={images.map((image) => ({
            text: image.name as string,
            key: image.data.s!.x as string,
            onClick: () => {
              setSelectedImage(image);
            },
            selected: image.name === selectedImage?.name,
          }))}
        >
          {selectedImage?.name || "Select image"}
        </DropdownButton>

        <CaretSpacer />

        <DropdownButton
          disabled={!selectedImage}
          items={
            selectedImage?.data.f?.map((format) => ({
              text: format.s as string,
              key: format.x as string,
              onClick: () =>
                setPreview({
                  src: format.p as string,
                  originalSrc: findOriginal(selectedImage),
                  width: format.w as number,
                  height: format.h as number,
                  format: format.f as string,
                }),
              selected: preview?.src === format.p,
            })) || []
          }
        >
          {(preview && selectedImage && findPreviewName(selectedImage, preview.src)) ||
            "Select format"}
        </DropdownButton>
      </ButtonWrapper>

      <Footer />
    </DemoItem>
  );
};

function findOriginal(image: Image): string | undefined {
  return (
    (image.data.f?.find((format) => (format.s as string | undefined)?.indexOf("Original") !== -1)
      ?.p as string | undefined) || void 0
  );
}

function findPreviewName(image: Image, src: string): string | undefined {
  return (image.data.f?.find((format) => format.p === src)?.s as string | undefined) || void 0;
}