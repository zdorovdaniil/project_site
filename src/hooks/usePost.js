import React, { useMemo, useRef, useState } from "react";

export const useSortedPosts = (posts, sort) => {

    // пересчет сортированных постов, при изменении объектов [selectedSort,posts]
    const sortedPosts = useMemo(() => {
        console.log("Call FUNCTION GET SORTED POSTS")
        if (sort) { return [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) }
        else return posts;
    }, [sort, posts]
    )
    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        // возвращение тех постов названия которых содержат стрроку поиска
        // post => post.title.includes(searchQuery)
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query))
    }, [query, sortedPosts]
    )
    return sortedAndSearchedPosts;
}