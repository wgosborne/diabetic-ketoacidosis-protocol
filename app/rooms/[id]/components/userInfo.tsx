'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { patient } from '@prisma/client';

interface UserInfoProps {
  currPatient: patient;
}

const UserInfo = ({ currPatient }: UserInfoProps) => {
  return (
    <div>
      <div>
        <div className="mb-3">
          <Badge className="text-xl">{currPatient?.name}</Badge>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
