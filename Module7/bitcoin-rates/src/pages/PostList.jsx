import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const PostList = () => {
  const posts = [
    {
      title: 'Post 1',
      content: 'Content for post 1. A beautiful landscape image.',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxwb3N0fGVufDB8fHx8MTY4ODI2NzQ5Nw&ixlib=rb-4.0.3&q=80&w=400',
    },
    {
      title: 'Post 2',
      content: 'Content for post 2. A close-up image of a flower.',
      image: 'https://images.unsplash.com/photo-1524985069022-6c6324e68b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBvc3R8ZW58MHx8fHwxNjg4MjY3NTQw&ixlib=rb-4.0.3&q=80&w=400',
    },
    {
      title: 'Post 3',
      content: 'Content for post 3. A vibrant cityscape image.',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxwb3N0fGVufDB8fHx8MTY4ODI2NzQ5Ng&ixlib=rb-4.0.3&q=80&w=400',
    },
  ];

  return (
    <Grid container spacing={2} style={{ padding: '2rem' }}>
      {posts.map((post, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={post.image}
              alt={post.title}
              onError={(e) => {
                e.target.onerror = null; // Prevent looping
                e.target.src = 'https://via.placeholder.com/400'; // Placeholder image on error
              }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;