// src/components/PostList.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const PostList = () => {
  const posts = [
    { title: 'Post 1', content: 'Content for post 1' },
    { title: 'Post 2', content: 'Content for post 2' },
    { title: 'Post 3', content: 'Content for post 3' },
  ];

  return (
    <Grid container spacing={3} style={{ padding: '2rem' }}>
      {posts.map((post, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography variant="body2" color="textSecondary">
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