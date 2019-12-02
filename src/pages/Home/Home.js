import React from "react";
import { Link } from "react-router-dom";
import Card from "Components/Card";
import Button from 'Components/Button';
import Logo from "Assets/logo.png";

export default () => {
  return (
    <Card
      title="The Flying Coder"
      subtitle="Massive undertaking in progress"
      image={Logo}
    >
      <Button link="/roadmap" isPrimary>
        Explore the roadmap
      </Button>
    </Card>
  );
};
