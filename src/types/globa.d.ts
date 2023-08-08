import {
  ChildContextProvider,
  ComponentProps,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import { InputProps } from 'react-select';

export declare global {
  type Role = {
    id?: string;
    name: string;
  };
  type Category = {
    id?: string;
    name: string;
  };
  type Tag = {
    id?: string;
    name: string;
  };
  type User = {
    id?: string;
    email: string;
    name?: string;
    password: string;
    confirmPassword?: string;
    emailVerified?: boolean;
    provider?: string | null;
    providerId?: string | null;
    avatar?: string | null;
    created_at?: Date;
    updated_at?: Date;
    posts?: Post[];
    roleName?: string;
  };
  type Post = {
    id?: string;
    title: string;
    cover: string;
    content?: string | null;
    slug: string;
    published?: boolean;
    created_at?: Date;
    updated_at?: Date;
    categories?: string[];
    tags?: string[];
    authorId?: string;
  };

  type HashedPassword = string;

  type Tokens = {
    access_token: string;
    refresh_token: string;
  };

  type Modal = {
    text: string;
    show?: boolean;
    error?: boolean;
    onClose?: any;
    onConfirm?: () => Promise<Id>;
  };

  type BreadcrumbItem = {
    text: string;
    link: string;
  };

  type Breadcrumb = {
    items: BreadcrumbItem[];
  };

  type CustomSelect = {
    options: readonly (string | GroupBase<string>)[];
    isLoading: boolean;
    handleCreate: (inputValue: string) => Promise<void>;
    onChange?:
      | ((newValue: MultiValue<string>, actionMeta: ActionMeta<string>) => void)
      | undefined;
    value: PropsValue<string> | undefined;
    labelFor: string;
    hasLabel: boolean;
    labelText: string;
    name: string;
    id: string;
    error: string;
  };

  type CustomSwitch = {
    handleChange: (e: any) => void;
    checked: boolean;
    labelFor: string;
    labelText: string;
    name: string;
    id: string;
    hasLabel: boolean;
    isRequired: boolean;
  };

  type DebouncedInput = {
    value: string;
    onChange: (value: any) => void;
    placeholder: string;
    debounce?: number;
    customClass?: string;
  };

  type DropDown = {
    isActive: boolean;
  };

  type Config = {
    accept: { 'image/*': string[] };
    maxFiles: number;
    maxSize: number;
    onDrop: (acceptedFiles: string | any[]) => void;
  };

  type FileUpload = {
    config: config;
    handleReset: VoidFunction;
    imagePreview: string;
  };

  type FormAction = {
    handleSubmit?: (e: any) => void;
    action?: string;
    text?: string;
    color?: string;
    icon?: ReactNode;
    name?: string;
    disabled?: boolean;
    customClass?: string;
  };

  type Header = {
    heading: string;
    paragraph: string;
    linkName: string;
    linkUrl: string;
  };

  interface IndeterminateCheckbox
    extends InputHTMLAttributes<HTMLInputElement> {
    indeterminate?: boolean;
  }

  type Input = {
    handleChange: (e: any) => void;
    value?: string;
    labelText?: string;
    labelFor?: string;
    id?: string;
    name?: string;
    type?: string;
    isRequired?: boolean;
    placeholder?: string;
    customClass?: string;
    icon?: ReactNode;
    hasLabel?: boolean;
    error?: string;
    debounce?: number;
  };

  type LoginField = {
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    autoComplete: string;
    isRequired: boolean;
    placeholder: string;
    icon?: ReactNode;
  };

  type LoginFields = LoginField[];

  type MenuItem = {
    [x: string]: any;
    icon?: ReactNode;
    text?: string;
    to?: string;
    customClass?: string;
    isSelected?: string;
    subMenu?: SubMenuItem[];
    children?: ChildContextProvider;
  };

  type SideBar = {
    isSelected: string;
  };

  type SubMenuItem = {
    text: string;
    to: string;
    customClass: string;
  };

  type MenuItems = {
    menuItems: MenuItem[];
    selected?: string;
  };
}
