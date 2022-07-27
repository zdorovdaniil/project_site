import React from "react";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

// принимаем фильтер и функцию которая будет этот фильтр изменять
const PostFilter = ({ filter, setFilter }) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Search"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue={'Sort'}
                options={[
                    { value: 'title', name: 'Title' },
                    { value: 'body', name: 'Body' },
                ]}
            />
        </div>
    );
};
export default PostFilter