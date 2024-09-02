'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UserInfo = () => {
  return (
    <div>
      <div>
        <div className="mb-3">
          <Badge className="text-xl">user info</Badge>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
