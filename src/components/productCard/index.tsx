import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function RecipeReviewCard() {
  const product = "hamza";
  return (
    <div className="flex gap-2 flex-wrap justify-between w-full ">
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia
          component="img"
          height="194"
          image="src/assets/google-shopping-ads-6304dccb7a49e-sej.webp"
          alt="Paella dish"
        />
        <CardContent>
          <Link to={product}>
            <Button variant="outlined">buy</Button>
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia
          component="img"
          height="194"
          image="src/assets/google-shopping-ads-6304dccb7a49e-sej.webp"
          alt="Paella dish"
        />
        <CardContent>
          <Link to={product}>
            <Button variant="outlined">buy</Button>
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia
          component="img"
          height="194"
          image="src/assets/google-shopping-ads-6304dccb7a49e-sej.webp"
          alt="Paella dish"
        />
        <CardContent>
          <Link to={product}>
            <Button variant="outlined">buy</Button>
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia
          component="img"
          height="194"
          image="src/assets/google-shopping-ads-6304dccb7a49e-sej.webp"
          alt="Paella dish"
        />
        <CardContent>
          <Link to={product}>
            <Button variant="outlined">buy</Button>
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>   
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia
          component="img"
          height="194"
          image="src/assets/google-shopping-ads-6304dccb7a49e-sej.webp"
          alt="Paella dish"
        />
        <CardContent>
          <Link to={product}>
            <Button variant="outlined">buy</Button>
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia
          component="img"
          height="194"
          image="src/assets/google-shopping-ads-6304dccb7a49e-sej.webp"
          alt="Paella dish"
        />
        <CardContent>
          <Link to={product}>
            <Button variant="outlined">buy</Button>
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia
          component="img"
          height="194"
          image="src/assets/google-shopping-ads-6304dccb7a49e-sej.webp"
          alt="Paella dish"
        />
        <CardContent>
          <Link to={product}>
            <Button variant="outlined">buy</Button>
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia
          component="img"
          height="194"
          image="src/assets/google-shopping-ads-6304dccb7a49e-sej.webp"
          alt="Paella dish"
        />
        <CardContent>
          <Link to={product}>
            <Button variant="outlined">buy</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
