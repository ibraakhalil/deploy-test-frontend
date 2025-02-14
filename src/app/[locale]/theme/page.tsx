"use client";

/* eslint-disable max-lines */
import {
  AdvanceSettingIcon,
  AlertIconFill,
  AppStoreIcon,
  AudioNextIcon,
  BookIcon,
  BookmarkIcon,
  BookmarkIconFill,
  BookmarkIconFill2,
  BookmarkNotFoundIcon,
  BookOpenIcon,
  BookOpenIconFill,
  ClockFillIcon,
  CloseCircleIcon,
  CloseCrossIcon,
  CollectionFolderIcon,
  ContactIcon,
  ContactIconFill,
  CopyIcon,
  CopySuccessIcon,
  CreditIconHeart,
  DataNotFoundIcon,
  DeleteIcon,
  DeveloperIcon,
  DisplayIcon,
  DownloadFileIcon,
  DownloadIcon,
  DropDownArrowIcon,
  EmptyCheckBoxIcon,
  EmptyRadioButtonIcon,
  EnterIcon,
  ExitIcon,
  FacebookIcon,
  FaceBookIcon2,
  FeedbackIcon,
  FileDeleteIcon,
  FileRemoveIcon,
  FolderIcon,
  FullScreenIcon,
  GmailIcon,
  GotoIcon,
  GotoIconFill,
  GotoLInkIcon,
  GridMenuIcon,
  GridMenuIconFill,
  HadithNumberIcon,
  HamBergerMenIcon,
  HelpIcon,
  HomeBreadcrumbsIcon,
  HomeIcon,
  HomeIconFill,
  HouseIconFill,
  ImageIcon,
  InfoIcon,
  InfoIcon3,
  InfoIconFill,
  LinkedInIcon,
  LinkIcon,
  LinkShareIcon,
  LogoIcon,
  LongArrowIcon,
  LoopIcon,
  LoveIcon,
  MegaMenuIcon,
  MegaMenuIconFill,
  MoonIcon,
  MoreGridIcon,
  MoveIcon,
  PageIcon,
  PauseIcon,
  PinIconAngularFill,
  PinIconSmall,
  PinIconVertical,
  PinIconVerticalFill,
  PinNotFoundIcon,
  PinterestIcon,
  PlayStoreIcon,
  PlusIcon,
  PrivacyIcon,
  PrivacyIcon2,
  PrivacyIconFIll,
  QuranIcon,
  ResetIcon,
  SearchFilterIcon,
  SearchIcon,
  SelectedCheckBoxIcon,
  SelectedRadioButtonIcon,
  SepiaIcon,
  SettingsIcon,
  ShareIcon,
  ShuffleIcon,
  SortingIcon,
  StarIcon,
  SubjectWIseGridIcon,
  SuccessIcon,
  SunIcon,
  TextBoxIcon,
  ThreeDotIcon,
  TickCircleIcon,
  TickIcon,
  TimerIcon,
  TimerIconFill,
  TrashBeenIcon,
  TwitterIcon,
  TwitterIcon2,
  UserIconFill,
  UserProfileIcon,
  VideoCameraIcon,
  VideoPlayIcon,
  VideoPlayIconFill,
  VolumeIcon,
  WorldSearchIcon,
} from "@/components/svg";
import { isDev } from "@/config/env";
import { notFound } from "next/navigation";
import { IconComponent, IconFamily } from "./icons";

export default function ThemePage() {
  if (!isDev) notFound();

  return (
    <div className="flex items-center justify-center overflow-y-auto p-10">
      <div className="space-y-10">
        {/* Navigation Icons */}
        <IconFamily iconFamily="Navigation Icons">
          <IconComponent iconName="HomeIcon" Icon={<HomeIcon className="size-8" />} />
          <IconComponent iconName="HomeIconFill" Icon={<HomeIconFill className="size-8" />} />
          <IconComponent iconName="HomeBreadcrumbsIcon" Icon={<HomeBreadcrumbsIcon className="size-8" />} />
          <IconComponent iconName="GridMenuIcon" Icon={<GridMenuIcon className="size-8" />} />
          <IconComponent iconName="GridMenuIconFill" Icon={<GridMenuIconFill className="size-8" />} />
          <IconComponent iconName="BookOpenIcon" Icon={<BookOpenIcon className="size-8" />} />
          <IconComponent iconName="BookOpenIconFill" Icon={<BookOpenIconFill className="size-8" />} />
          <IconComponent iconName="GotoLInkIcon" Icon={<GotoLInkIcon className="size-8" />} />
          <IconComponent iconName="GotoIcon" Icon={<GotoIcon className="size-8" />} />
          <IconComponent iconName="GotoIconFIll" Icon={<GotoIconFill className="size-8" />} />
          <IconComponent iconName="BookmarkIcon" Icon={<BookmarkIcon className="size-8" />} />
          <IconComponent iconName="BookmarkIconFill" Icon={<BookmarkIconFill className="size-8" />} />
          <IconComponent iconName="MegaMenuIcon" Icon={<MegaMenuIcon className="size-8" />} />
          <IconComponent iconName="MegaMenuIconFill" Icon={<MegaMenuIconFill className="size-8" />} />
          <IconComponent iconName="HamBergerMenIcon" Icon={<HamBergerMenIcon className="size-8" />} />
          <IconComponent iconName="UserIconFill" Icon={<UserIconFill className="size-8" />} />
          <IconComponent iconName="CollectionFolderIcon" Icon={<CollectionFolderIcon className="size-8" />} />
          <IconComponent iconName="SubjectWIseGridIcon" Icon={<SubjectWIseGridIcon className="size-8" />} />
          <IconComponent iconName="VideoPlayIconFill" Icon={<VideoPlayIconFill className="size-8" />} />
          <IconComponent iconName="VideoCameraIcon" Icon={<VideoCameraIcon className="size-8" />} />
          <IconComponent iconName="VideoPlayIcon" Icon={<VideoPlayIcon className="size-8" />} />
          <IconComponent iconName="UserProfileIcon" Icon={<UserProfileIcon className="size-8" />} />
          <IconComponent iconName="BookIcon" Icon={<BookIcon className="size-8" />} />
          <IconComponent iconName="PageIcon" Icon={<PageIcon className="size-8" />} />
          <IconComponent iconName="InfoIcon" Icon={<InfoIcon className="size-8" />} />
          <IconComponent iconName="ContactIcon" Icon={<ContactIcon className="size-8" />} />
          <IconComponent iconName="PrivacyIcon" Icon={<PrivacyIcon className="size-8" />} />
          <IconComponent iconName="DisplayIcon" Icon={<DisplayIcon className="size-8" />} />
          <IconComponent iconName="MoreGridIcon" Icon={<MoreGridIcon className="size-8" />} />
          <IconComponent iconName="DeveloperIcon" Icon={<DeveloperIcon className="size-8" />} />
          <IconComponent iconName="PrivacyIcon2" Icon={<PrivacyIcon2 className="size-8" />} />
          <IconComponent iconName="FeedbackIcon" Icon={<FeedbackIcon className="size-8" />} />
          <IconComponent iconName="HelpIcon" Icon={<HelpIcon className="size-8" />} />
        </IconFamily>

        {/* Common Icons */}
        <IconFamily iconFamily="Common Icons">
          <IconComponent iconName="QuranIcon" Icon={<QuranIcon className="size-8" />} />
          <IconComponent iconName="DeleteIcon" Icon={<DeleteIcon className="size-8" />} />
          <IconComponent iconName="ResetIcon" Icon={<ResetIcon className="size-8" />} />
          <IconComponent iconName="SelectedCheckBoxIcon" Icon={<SelectedCheckBoxIcon className="size-8" />} />
          <IconComponent iconName="PlusIcon" Icon={<PlusIcon className="size-8" />} />
          <IconComponent iconName="LogoIcon" Icon={<LogoIcon />} />
          <IconComponent iconName="EmptyCheckBoxIcon" Icon={<EmptyCheckBoxIcon className="size-8" />} />
          <IconComponent iconName="SelectedRadioButtonIcon" Icon={<SelectedRadioButtonIcon className="size-8" />} />
          <IconComponent iconName="EmptyRadioButtonIcon" Icon={<EmptyRadioButtonIcon className="size-8" />} />
          <IconComponent iconName="CopySuccessIcon" Icon={<CopySuccessIcon className="size-8" />} />
          <IconComponent iconName="TrashBeenIcon" Icon={<TrashBeenIcon className="size-8" />} />
          <IconComponent iconName="DownloadIcon" Icon={<DownloadIcon className="size-8" />} />
          <IconComponent iconName="ThreeDotIcon" Icon={<ThreeDotIcon className="size-8" />} />
          <IconComponent iconName="SearchIcon" Icon={<SearchIcon className="size-8" />} />
          <IconComponent iconName="DropDownArrowIcon" Icon={<DropDownArrowIcon className="size-8" />} />
          <IconComponent iconName="LongArrowIcon" Icon={<LongArrowIcon className="size-8" />} />
          <IconComponent iconName="SettingsIcon" Icon={<SettingsIcon className="size-8" />} />
          <IconComponent iconName="SunIcon" Icon={<SunIcon className="size-8" />} />
          <IconComponent iconName="MoonIcon" Icon={<MoonIcon className="size-8" />} />
          <IconComponent iconName="SepiaIcon" Icon={<SepiaIcon className="size-8" />} />
          <IconComponent iconName="LoveIcon" Icon={<LoveIcon className="size-8" />} />
          <IconComponent iconName="HadithNumberIcon" Icon={<HadithNumberIcon className="size-8" />} />
          <IconComponent iconName="TextBoxIcon" Icon={<TextBoxIcon className="size-8" />} />
          <IconComponent iconName="StarIcon" Icon={<StarIcon className="size-8" />} />
          <IconComponent iconName="InfoIcon3" Icon={<InfoIcon3 className="size-8" />} />
          <IconComponent iconName="SuccessIcon" Icon={<SuccessIcon className="size-8" />} />
          <IconComponent iconName="SearchFilterIcon" Icon={<SearchFilterIcon className="size-8" />} />
          <IconComponent iconName="TickIcon" Icon={<TickIcon className="size-8" />} />
        </IconFamily>

        {/* Collection Icons */}
        <IconFamily iconFamily="Collection Icons">
          <IconComponent iconName="ClockFillIcon" Icon={<ClockFillIcon className="size-8" />} />
          <IconComponent iconName="BookmarkIconFill2" Icon={<BookmarkIconFill2 className="size-8" />} />
          <IconComponent iconName="PinIconVertical" Icon={<PinIconVertical className="size-8" />} />
          <IconComponent iconName="PinIconVerticalFill" Icon={<PinIconVerticalFill className="size-8" />} />
          <IconComponent iconName="TimerIcon" Icon={<TimerIcon className="size-8" />} />
          <IconComponent iconName="TimerIconFill" Icon={<TimerIconFill className="size-8" />} />
          <IconComponent iconName="EnterIcon" Icon={<EnterIcon className="size-8" />} />
          <IconComponent iconName="ExitIcon" Icon={<ExitIcon className="size-8" />} />
          <IconComponent iconName="SortingIcon" Icon={<SortingIcon className="size-8" />} />
          <IconComponent iconName="PinIconAngularFill" Icon={<PinIconAngularFill className="size-8" />} />
        </IconFamily>

        {/* Actions Icons */}
        <IconFamily iconFamily="Action Icons">
          <IconComponent iconName="CopyIcon" Icon={<CopyIcon className="size-8" />} />
          <IconComponent iconName="PinIconSmall" Icon={<PinIconSmall className="size-8" />} />
          <IconComponent iconName="ImageIcon" Icon={<ImageIcon className="size-8" />} />
          <IconComponent iconName="ShareIcon" Icon={<ShareIcon className="size-8" />} />
          <IconComponent iconName="LinkIcon" Icon={<LinkIcon className="size-8" />} />
          <IconComponent iconName="DownloadFileIcon" Icon={<DownloadFileIcon className="size-8" />} />
        </IconFamily>

        {/* Modal Icons */}
        <IconFamily iconFamily="Modal Icons">
          <IconComponent iconName="FileRemoveIcon" Icon={<FileRemoveIcon className="size-8" />} />
          <IconComponent iconName="FileDeleteIcon" Icon={<FileDeleteIcon className="size-8" />} />
          <IconComponent iconName="AdvanceSettingIcon" Icon={<AdvanceSettingIcon className="size-8" />} />
          <IconComponent iconName="CloseCircleIcon" Icon={<CloseCircleIcon className="size-8" />} />
          <IconComponent iconName="CloseCrossIcon" Icon={<CloseCrossIcon className="size-8" />} />
          <IconComponent iconName="TickCircleIcon" Icon={<TickCircleIcon className="size-8" />} />
          <IconComponent iconName="FolderIcon" Icon={<FolderIcon color="#737EE1" className="size-10" />} />
        </IconFamily>

        {/* Social Media Icons */}
        <IconFamily iconFamily="Social Media Icons">
          <IconComponent iconName="FacebookIcon" Icon={<FacebookIcon className="size-8" />} />
          <IconComponent iconName="FaceBookIcon2" Icon={<FaceBookIcon2 className="size-8" />} />
          <IconComponent iconName="TwitterIcon" Icon={<TwitterIcon className="size-8" />} />
          <IconComponent iconName="TwitterIcon2" Icon={<TwitterIcon2 className="size-8" />} />
          <IconComponent iconName="LinkedInIcon" Icon={<LinkedInIcon className="size-8" />} />
          <IconComponent iconName="PinterestIcon" Icon={<PinterestIcon className="size-8" />} />
          <IconComponent iconName="LinkShareIcon" Icon={<LinkShareIcon className="size-8" />} />
          <IconComponent iconName="PlayStoreIcon" Icon={<PlayStoreIcon className="size-8" />} />
          <IconComponent iconName="AppStoreIcon" Icon={<AppStoreIcon className="size-8" />} />
          <IconComponent iconName="WorldSearchIcon" Icon={<WorldSearchIcon className="size-8" />} />
          <IconComponent iconName="GmailIcon" Icon={<GmailIcon className="size-8" />} />
        </IconFamily>

        {/* Error and Not Found Icons */}
        <IconFamily iconFamily="Error And Not Found Icons">
          <IconComponent iconName="BookmarkNotFoundIcon" Icon={<BookmarkNotFoundIcon className="size-8" />} />
          <IconComponent iconName="PinNotFoundIcon" Icon={<PinNotFoundIcon className="size-8" />} />
          <IconComponent iconName="DataNotFoundIcon" Icon={<DataNotFoundIcon className="size-8" />} />
        </IconFamily>

        {/* Others Pages Icons */}
        <IconFamily iconFamily="Others Pages Icons">
          <IconComponent iconName="PrivacyIconFIll" Icon={<PrivacyIconFIll className="size-8" />} />
          <IconComponent iconName="CreditIconHeart" Icon={<CreditIconHeart className="size-8" />} />
          <IconComponent iconName="InfoIconFill" Icon={<InfoIconFill className="size-8" />} />
          <IconComponent iconName="ContactIconFill" Icon={<ContactIconFill className="size-8" />} />
          <IconComponent iconName="AlertIconFill" Icon={<AlertIconFill className="size-8" />} />
          <IconComponent iconName="HouseIconFill" Icon={<HouseIconFill className="size-8" />} />
        </IconFamily>

        {/* Multimedia Icons */}
        <IconFamily iconFamily="Multimedia Icons">
          <IconComponent iconName="PauseIcon" Icon={<PauseIcon className="size-8" />} />
          <IconComponent iconName="MoveIcon" Icon={<MoveIcon className="size-8" />} />
          <IconComponent iconName="ShuffleIcon" Icon={<ShuffleIcon className="size-8" />} />
          <IconComponent iconName="LoopIcon" Icon={<LoopIcon className="size-8" />} />
          <IconComponent iconName="VolumeIcon" Icon={<VolumeIcon className="size-8" />} />
          <IconComponent iconName="FullScreenIcon" Icon={<FullScreenIcon className="size-8" />} />
          <IconComponent iconName="AudioNextIcon" Icon={<AudioNextIcon className="size-8" />} />
        </IconFamily>
      </div>
    </div>
  );
}
