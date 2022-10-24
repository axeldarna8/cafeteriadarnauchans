import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Items({producto}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            variant= 'h5'
            color= 'textSecondary'
          >
            {producto.precio}
            </Typography>
        }
        title={producto.title}
        subheader= "Mediano, Grande"
      />
      <CardMedia
        component="img"
        image={producto.image}
        alt={producto.alt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {producto.especial}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCartIcon fontSize='large'/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Ver Detalles"
        >
        <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Tamaños: {producto.tamaño}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}