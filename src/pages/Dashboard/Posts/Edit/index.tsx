import { useCallback, useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { FiSave } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import Input from '../../../../components/Input';
import CustomSelect from '../../../../components/CustomSelect';
import { axiosPrivate } from '../../../../utils/axios';
import { BASE_URL } from '../../../../environments';
import FormAction from '../../../../components/FormAction';
import CustomSwitch from '../../../../components/CustomSwitch';
import { UserContext } from '../../../../contexts/UserContext';
import { formats, modules } from '../../../../constants/richText';
import FileUpload from '../../../../components/FileUpload';
import usePost from '../../../../hooks/usePost';
import useCategory from '../../../../hooks/useCategory';
import useTag from '../../../../hooks/useTag';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../../../components/Breadcrumb';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { getPostById, updatePost } = usePost();
  const { getCategories } = useCategory();
  const { getTags } = useTag();
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState({
    categories: [],
    tags: [],
  });
  const [post, setPost] = useState({
    title: '',
    slug: '',
    content: '',
    categories: [],
    tags: [],
    published: false,
    cover: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postResponse, categoriesResponse, tagsResponse] =
          await Promise.all([
            getPostById(id as string),
            getCategories(),
            getTags(),
          ]);

        const categoriesOptions = categoriesResponse?.data.map(
          ({ id, name }: Category) => ({
            value: id,
            label: name,
          })
        );

        const tagsOptions = tagsResponse?.data.map(({ id, name }: Tag) => ({
          value: id,
          label: name,
        }));

        setOptions({
          categories: categoriesOptions,
          tags: tagsOptions,
        });
        setPost(postResponse);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const validateFields = () => {
    const requiredFields = ['title', 'slug', 'content', 'categories', 'tags'];
    const newErrors: Record<string, string> = {};

    requiredFields.forEach((field: any) => {
      if (!post[field as keyof typeof post]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear the error for the input field being edited
    setErrors((prev: any) => ({
      ...prev,
      [id]: '',
    }));
  };

  const handleContentChange = (e: any) => {
    setPost((prev) => ({
      ...prev,
      content: e,
    }));
  };

  const handleCreate = async (inputValue: string, type: string) => {
    setIsLoading(true);
    try {
      const { data } = await axiosPrivate.post(`${BASE_URL}/api/${type}`, {
        data: { name: inputValue },
      });
      const newOption = {
        label: inputValue,
        value: data.data.id,
      };
      setOptions((prevOptions: any) => ({
        ...prevOptions,
        [type]: [...prevOptions[type], newOption],
      }));
      setPost((prevPost: any) => ({
        ...prevPost,
        [type]: [...prevPost[type], newOption],
      }));
    } catch (error) {
      console.log('Error creating new option:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchChange = () => {
    setPost((prev) => ({
      ...prev,
      published: !prev.published,
    }));
  };

  const handleChange = (newValue: string, type: string) => {
    setPost((prev) => ({
      ...prev,
      [type]: newValue,
    }));

    // Clear the error for the input field being edited
    setErrors((prev: any) => ({
      ...prev,
      [type]: '',
    }));
  };

  const handleSubmit = async () => {
    const isValid = validateFields();
    if (isValid) {
      setIsLoading(true);
      const body = {
        title: post.title,
        slug: post.slug,
        content: post.content,
        categories: post.categories.map(({ value }) => value),
        tags: post.tags.map(({ value }) => value),
        authorId: user.id,
        published: post.published,
        cover: post.cover,
      };
      const res = await updatePost(id as string, body as any);
      setIsLoading(false);
      return res?.status
        ? toast.success(res.message) && navigate('/dashboard/posts')
        : toast.error(res.message);
    }
    setIsLoading(false);
  };

  const onDrop = useCallback((acceptedFiles: string | any[]) => {
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setPost(
          (prev) =>
            ({
              ...prev,
              cover: reader.result,
            } as any)
        );
      };
      reader.readAsDataURL(acceptedFiles[0]);
    }
  }, []);

  const handleReset = () => {
    setPost((prev) => ({
      ...prev,
      cover: '',
    }));
  };

  const config = {
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.svg'],
    },
    maxFiles: 1,
    maxSize: 5000000,
    onDrop,
  };

  return (
    <div className="w-full flex flex-col p-5 bg-gray-300">
      <Breadcrumb
        items={[
          { text: 'home', link: '/dashboard' },
          { text: 'posts', link: '/dashboard/posts' },
          { text: 'edit post', link: '' },
        ]}
      />
      <h2 className="text-xl font-bold mb-5 flex">New Post</h2>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-3/4">
          <div className="bg-white border rounded-md p-4 border-slate-300 drop-shadow-sm">
            <Input
              key="title"
              hasLabel={true}
              handleChange={handleInputChange}
              value={post.title}
              labelText="Title"
              labelFor="title"
              id="title"
              name="title"
              type="text"
              isRequired={true}
              placeholder="Post title"
              error={errors.title}
            />
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={post.content}
              onChange={handleContentChange}
              className="mt-8"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/4">
          <div className="bg-white rounded-md p-4 border border-slate-300 drop-shadow-sm">
            <FileUpload
              config={config}
              handleReset={handleReset}
              imagePreview={post.cover}
            />
            <Input
              key="slug"
              hasLabel={true}
              handleChange={handleInputChange}
              value={post.slug}
              labelText="Slug"
              labelFor="slug"
              id="slug"
              name="slug"
              type="text"
              isRequired={true}
              placeholder="Slug"
              error={errors.slug}
            />
            <CustomSelect
              options={options.categories}
              handleCreate={(inputValue) =>
                handleCreate(inputValue, 'categories')
              }
              onChange={(newValue) => handleChange(newValue, 'categories')}
              value={post.categories as any}
              isLoading={isLoading}
              labelFor="categories"
              labelText="Categories"
              hasLabel={true}
              name="categories"
              id="categories"
              error={errors.categories}
            />
            <CustomSelect
              options={options.tags}
              handleCreate={(inputValue) => handleCreate(inputValue, 'tags')}
              onChange={(newValue) => handleChange(newValue, 'tags')}
              value={post.tags}
              isLoading={isLoading}
              labelFor="tags"
              labelText="Tags"
              hasLabel={true}
              name="tags"
              id="tags"
              error={errors.tags}
            />
            <CustomSwitch
              hasLabel={true}
              handleChange={handleSwitchChange}
              checked={post.published}
              labelText="Public?"
              labelFor="published"
              id="published"
              name="published"
              isRequired={true}
            />
            <FormAction
              handleSubmit={handleSubmit}
              action="button"
              icon={<FiSave className="h-4 w-4 text-white mr-2" />}
              text="Save"
              color="purple"
              name="Save"
              disabled={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
